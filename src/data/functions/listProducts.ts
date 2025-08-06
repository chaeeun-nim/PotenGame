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
      category, // URL에서 오는 카테고리 (NINTENDO01, PLAYSTATION05 등)
      productType, // SelectBar에서 오는 상품 타입 (GAME, HARDWARE)
    } = params;

    const customFilter: CustomFilter = {};

    // ✅ 1. 먼저 URL 카테고리 처리 (플랫폼 필터)
    if (
      category &&
      [
        'NINTENDONDS',
        'NINTENDO01',
        'NINTENDO02',
        'PLAYSTATION04',
        'PLAYSTATION05',
      ].includes(category.toUpperCase())
    ) {
      customFilter['extra.category'] = { $all: [category.toUpperCase()] };
    }

    // ✅ 2. SelectBar의 상품 타입 필터 추가 적용
    if (productType && customFilter['extra.category']) {
      // 기존 플랫폼 필터에 상품 타입 추가
      if ('$all' in customFilter['extra.category']) {
        customFilter['extra.category'] = {
          $all: [...customFilter['extra.category'].$all, productType],
        };
      }
    } else if (productType) {
      // 플랫폼 필터 없이 상품 타입만 있는 경우
      customFilter['extra.category'] = { $all: [productType] };
    } else if (!category) {
      // 기본값: 전체 상품 목록일 때
      customFilter['extra.category'] = { $in: ['GAME', 'HARDWARE'] };
    }

    // ✅ 3. platform 필터는 SelectBar에서 오는 것만 처리
    if (platform) {
      customFilter['extra.platform'] = platform;
    }

    // 나머지 필터들은 기존과 동일
    if (condition === 'new') {
      customFilter['extra.used'] = false;
    } else if (condition === 'used') {
      customFilter['extra.used'] = true;
    }

    if (priceMin !== undefined || priceMax !== undefined) {
      customFilter.price = {};
      if (priceMin !== undefined) customFilter.price['$gte'] = priceMin;
      if (priceMax !== undefined) customFilter.price['$lte'] = priceMax;
    }

    if (search) {
      customFilter.name = { $regex: search, $options: 'i' };
    }

    // 정렬 객체 생성
    const sortObj: SortObject = {};
    if (sort.startsWith('-')) {
      sortObj[sort.substring(1)] = -1;
    } else {
      sortObj[sort] = 1;
    }

    console.log('Final customFilter:', JSON.stringify(customFilter, null, 2));

    // URL 구성
    const queryParams = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
      custom: JSON.stringify(customFilter),
      sort: JSON.stringify(sortObj),
    });

    const url = `${API_URL}/products?${queryParams.toString()}`;
    console.log('API URL:', url);

    const res = await fetch(url, {
      headers: {
        'Client-Id': CLIENT_ID,
      },
      cache: 'no-store',
    });

    const data = await res.json();

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
