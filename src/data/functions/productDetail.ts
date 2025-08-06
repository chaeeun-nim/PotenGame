// src/data/functions/productDetail.ts
import { Iproduct } from '@/types/products';

export interface ProductDetailResponse {
  ok: number;
  item?: Iproduct;
  message?: string;
}

// 상품 상세 정보를 가져오는 함수
export async function getProductDetail(
  productId: string | number,
  category?: string,
): Promise<ProductDetailResponse> {
  try {
    // API 엔드포인트 구성
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://fesp-api.koyeb.app';
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID || 'febc13-final14-emjf';

    let url = `${baseUrl}/market/products/${productId}`;

    // 카테고리가 있는 경우 쿼리 파라미터로 추가
    if (category) {
      url += `?category=${encodeURIComponent(category)}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'client-id': clientId,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      ok: 1,
      item: data.item,
    };
  } catch (error) {
    console.error('상품 상세 정보 조회 실패:', error);

    // 개발 환경에서는 목업 데이터 반환
    if (process.env.NODE_ENV === 'development') {
      return getMockProductDetail(productId);
    }

    return {
      ok: 0,
      message: error instanceof Error ? error.message : '상품 정보를 불러올 수 없습니다.',
    };
  }
}

// 목업 데이터 (data.json 기반)
function getMockProductDetail(productId: string | number): ProductDetailResponse {
  const id = typeof productId === 'string' ? parseInt(productId) : productId;

  // data.json에서 해당 상품 찾기 (예시 데이터)
  const mockProducts: Iproduct[] = [
    {
      _id: 27,
      seller_id: 2,
      price: 47000,
      shippingFees: 4000,
      show: true,
      active: true,
      name: '젤다의 전설 브레스 오브 더 와일드',
      quantity: 43,
      buyQuantity: 28,
      bookmarks: 240,
      mainImages: [
        {
          path: 'uploadFiles/pro-27-thumbnail.webp',
          name: 'pro-27-thumbnail.jpg',
          originalname: '젤다의 전설 브레스 오브 더 와일드.webp',
        },
      ],
      content: [
        {
          path: 'uploadFiles/pro-27-detail.webp',
          name: 'pro-27-detail.webp',
          originalname: '젤다의 전설 브레스 오브 더 와일드.webp',
        },
      ],
      extra: {
        releaseDate: '2017-12-01',
        isNew: false,
        isBest: false,
        category: ['GAME', 'NINTENDO01', 'USED'],
        sort: 1,
        condition: '중고',
        used: true,
        ageGrade: '전체 이용가',
        platform: 'Nintendo Switch',
        platformVersion: 1,
        originalPrice: 74800,
        language: '음성-영어,일본어 / 자막-한국어',
      },
    },
    {
      _id: 54,
      seller_id: 2,
      price: 84800,
      shippingFees: 4000,
      show: true,
      active: true,
      name: '젤다의 전설 야생의 숨결',
      quantity: 45,
      buyQuantity: 31,
      bookmarks: 320,
      mainImages: [
        {
          path: 'uploadFiles/pro-54-thumbnail.webp',
          name: 'pro-54-thumbnail.jpg',
          originalname: '젤다의 전설 야생의 숨결.webp',
        },
      ],
      content: [
        {
          path: 'uploadFiles/pro-54-detail.webp',
          name: 'pro-54-detail.webp',
          originalname: '젤다의 전설 야생의 숨결.webp',
        },
      ],
      extra: {
        releaseDate: '2025-06-05',
        isNew: true,
        isBest: true,
        category: ['GAME', 'NINTENDO02', 'NEW'],
        sort: 1,
        condition: '새상품',
        used: false,
        ageGrade: '12세 이용가',
        platform: 'Nintendo Switch',
        platformVersion: 2,
        originalPrice: 84800,
        language: '음성-없음 / 자막-한국어',
      },
    },
  ];

  const product = mockProducts.find((p) => p._id === id);

  if (product) {
    return {
      ok: 1,
      item: product,
    };
  }

  return {
    ok: 0,
    message: '상품을 찾을 수 없습니다.',
  };
}
