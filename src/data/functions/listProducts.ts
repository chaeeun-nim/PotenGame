// src/data/functions/listProducts.ts
import { ApiRes, ApiResPromise } from '@/types/api';
import { Iproduct } from '@/types/products';
import { SortType } from '@/types/sort';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

// 검색/필터 파라미터 타입
export interface ProductSearchParams {
  page?: number;
  limit?: number;
  sort?: SortType;
  platform?: string;
  condition?: string;
  priceMin?: number;
  priceMax?: number;
  search?: string;
  category?: string; // listStore와 일치
  productType?: 'GAME' | 'HARDWARE' | 'ALL';
  extra?: {
    category?: string;
    condition?: string;
    platform?: string;
    used?: boolean;
    isNew?: boolean;
    isBest?: boolean;
    [key: string]: string | number | boolean | null | undefined;
  };
}

// 커스텀 필터 타입 정의
export interface CustomFilter {
  'extra.category'?: { $all: string[] } | { $in: string[] };
  'extra.platform'?: string;
  'extra.used'?: boolean;
  price?: { $gte?: number; $lte?: number };
  name?: { $regex: string; $options: string };
  [key: string]: unknown; // 추가 필터를 위한 인덱스 시그니처
}

// 정렬 객체 타입 정의
export interface SortObject {
  [key: string]: 1 | -1;
}

// 페이지네이션이 포함된 응답 타입
export interface ProductListResponse {
  ok: 0 | 1;
  item: Iproduct[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  message?: string;
}

// 카테고리 코드에 따른 상품 타입 매핑 함수
function getProductTypeByCategory(category?: string): 'GAME' | 'HARDWARE' | 'ALL' {
  if (!category) return 'ALL';

  // 플랫폼 카테고리는 모든 상품(게임+하드웨어) 포함
  const platformCategories = [
    'NINTENDONDS',
    'NINTENDO01',
    'NINTENDO02',
    'PLAYSTATION04',
    'PLAYSTATION05',
  ];

  if (platformCategories.includes(category.toUpperCase())) {
    return 'ALL'; // 플랫폼별 페이지에서는 게임과 하드웨어 모두 표시
  }

  // 특정 상품 타입 카테고리
  switch (category.toUpperCase()) {
    case 'GAME':
      return 'GAME';
    case 'HARDWARE':
    case 'CONSOLE':
      return 'HARDWARE';
    default:
      return 'ALL';
  }
}

// 동적 카테고리 필터 생성 함수
function createCategoryFilter(
  params: ProductSearchParams,
): { $all: string[] } | { $in: string[] } | undefined {
  const { category, productType } = params;

  // productType이 명시적으로 전달된 경우
  if (productType) {
    switch (productType) {
      case 'GAME':
        return { $all: ['GAME'] };
      case 'HARDWARE':
        return { $all: ['HARDWARE'] };
      case 'ALL':
        return { $in: ['GAME', 'HARDWARE'] };
    }
  }

  // category 파라미터 기반으로 판단
  if (category) {
    const productTypeFromCategory = getProductTypeByCategory(category);

    switch (productTypeFromCategory) {
      case 'GAME':
        return { $all: ['GAME'] };
      case 'HARDWARE':
        return { $all: ['HARDWARE'] };
      case 'ALL':
        return { $in: ['GAME', 'HARDWARE'] };
    }
  }

  // 기본값: 모든 상품 타입
  return { $in: ['GAME', 'HARDWARE'] };
}

// 상품 목록 조회 (검색/필터/정렬 지원)
export async function getProductList(params: ProductSearchParams = {}): Promise<
  ApiRes<Iproduct[]> & {
    pagination?: { page: number; limit: number; total: number; totalPages: number };
  }
> {
  try {
    const {
      page = 1,
      limit = 99999,
      sort = '-createdAt',
      platform,
      condition,
      priceMin,
      priceMax,
      search,
      category,
      productType,
    } = params;

    // 커스텀 필터 객체 생성
    const customFilter: CustomFilter = {};

    // 동적 카테고리 필터 적용
    const categoryFilter = createCategoryFilter({ category, productType });
    if (categoryFilter) {
      customFilter['extra.category'] = categoryFilter;
    }

    // 플랫폼 필터
    if (platform) {
      customFilter['extra.platform'] = platform;
    }

    // 상태 필터
    if (condition === 'new') {
      customFilter['extra.used'] = false;
    } else if (condition === 'used') {
      customFilter['extra.used'] = true;
    }

    // 가격 범위 필터
    if (priceMin !== undefined || priceMax !== undefined) {
      customFilter.price = {};
      if (priceMin !== undefined) customFilter.price['$gte'] = priceMin;
      if (priceMax !== undefined) customFilter.price['$lte'] = priceMax;
    }

    // 검색어 필터
    if (search) {
      customFilter.name = { $regex: search, $options: 'i' };
    }

    // 추가 카테고리 필터 (GAME + 다른 카테고리 조합)
    if (category && !['GAME', 'HARDWARE', 'CONSOLE'].includes(category.toUpperCase())) {
      // 플랫폼 카테고리인 경우, 기존 필터를 덮어쓰지 않고 추가 조건 적용
      const platformCategories = [
        'NINTENDONDS',
        'NINTENDO01',
        'NINTENDO02',
        'PLAYSTATION04',
        'PLAYSTATION05',
      ];

      if (platformCategories.includes(category.toUpperCase())) {
        // 플랫폼별 필터: 해당 플랫폼의 게임과 하드웨어 모두 포함
        customFilter['extra.category'] = { $all: [category.toUpperCase()] };
      } else if (categoryFilter && '$all' in categoryFilter && categoryFilter.$all) {
        // 기존 GAME/HARDWARE 필터에 추가 카테고리 조건 추가
        customFilter['extra.category'] = {
          $all: [...categoryFilter.$all, category.toUpperCase()],
        };
      }
    }

    // 정렬 객체 생성
    const sortObj: SortObject = {};
    if (sort.startsWith('-')) {
      sortObj[sort.substring(1)] = -1;
    } else {
      sortObj[sort] = 1;
    }

    // URL 구성
    const queryParams = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
      custom: JSON.stringify(customFilter),
      sort: JSON.stringify(sortObj),
    });

    const url = `${API_URL}/products?${queryParams.toString()}`;

    const res = await fetch(url, {
      headers: {
        'Client-Id': CLIENT_ID,
      },
      cache: 'no-store', // 실시간 데이터를 위해 캐시 비활성화
    });

    const data = await res.json();

    // ApiRes 형태로 반환, pagination 정보 추가
    if (data.ok) {
      return {
        ok: 1,
        item: data.item,
        pagination: data.pagination,
      };
    } else {
      return {
        ok: 0,
        message: data.message || '상품을 불러올 수 없습니다.',
      };
    }
  } catch (error) {
    console.error('상품 목록 조회 오류:', error);
    return {
      ok: 0,
      message: '상품 목록을 불러오는 중 오류가 발생했습니다.',
    };
  }
}

// 인기 상품 조회
export async function getPopularProducts(
  limit: number = 8,
  productType: 'GAME' | 'HARDWARE' | 'ALL' = 'GAME',
): ApiResPromise<Iproduct[]> {
  try {
    let categoryFilter;

    switch (productType) {
      case 'GAME':
        categoryFilter = '{"extra.category":{"$all":["GAME"]}}';
        break;
      case 'HARDWARE':
        categoryFilter = '{"extra.category":{"$all":["HARDWARE"]}}';
        break;
      case 'ALL':
        categoryFilter = '{"extra.category":{"$in":["GAME","HARDWARE"]}}';
        break;
    }

    const res = await fetch(
      `${API_URL}/products?limit=${limit}&page=1&custom=${categoryFilter}&sort={"buyQuantity": -1}`,
      {
        headers: {
          'Client-Id': CLIENT_ID,
        },
        cache: 'force-cache',
      },
    );
    return res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '인기 상품을 불러오는 중 오류가 발생했습니다.' };
  }
}

// 특정 상품 상세 조회
export async function getProductDetail(productId: number): ApiResPromise<Iproduct> {
  try {
    const res = await fetch(`${API_URL}/products/${productId}`, {
      headers: {
        'Client-Id': CLIENT_ID,
      },
      cache: 'no-store', // 상세 페이지는 항상 최신 정보
    });
    return res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '상품 정보를 불러오는 중 오류가 발생했습니다.' };
  }
}

// 카테고리를 포함한 상품 상세 조회 (기존 함수 확장)
export async function getProductDetailWithCategory(
  productId: number,
  category?: string,
): ApiResPromise<Iproduct> {
  try {
    let url = `${API_URL}/products/${productId}`;

    // 카테고리가 있는 경우 쿼리 파라미터로 추가
    if (category) {
      const customFilter = {
        'extra.category': { $all: ['GAME', category.toUpperCase()] },
      };
      url += `?custom=${encodeURIComponent(JSON.stringify(customFilter))}`;
    }

    const res = await fetch(url, {
      headers: {
        'Client-Id': CLIENT_ID,
      },
      cache: 'no-store', // 상세 페이지는 항상 최신 정보
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '상품 정보를 불러오는 중 오류가 발생했습니다.' };
  }
}

// 문자열 ID도 지원하는 상품 상세 조회
export async function getProductDetailById(
  productId: string | number,
  category?: string,
): ApiResPromise<Iproduct> {
  const id = typeof productId === 'string' ? parseInt(productId) : productId;

  if (isNaN(id)) {
    return { ok: 0, message: '유효하지 않은 상품 ID입니다.' };
  }

  return getProductDetailWithCategory(id, category);
}
