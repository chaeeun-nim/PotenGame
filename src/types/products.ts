// 상품 조건 타입들
export type ProductCondition = '새상품' | '중고' | '미사용 중고';
export type AgeGrade =
  | '전체 이용가'
  | '12세 이용가'
  | '15세 이용가'
  | '18세 이용가'
  | '청소년 이용불가';
export type PlatformName =
  | '닌텐도 NDS'
  | '닌텐도 스위치 1'
  | '닌텐도 스위치 2'
  | '플레이스테이션 4'
  | '플레이스테이션 5';

// 상품 extra 타입
export interface IproductExtra {
  releaseDate: string;
  isNew: boolean;
  isBest: boolean;
  category: string[];
  sort: number;
  condition: string;
  used: boolean;
  ageGrade: string;
  platform: string;
  platformVersion: number | null;
  originalPrice: number;
  language: string;
}

// 상품 seller 타입
export interface IproductSeller {
  _id: number;
  email: string;
  name: string;
  phone: string;
  address: string;
  image: string;
  extra: IproductSellerExtra;
}

// 상품 seller extra 타입
export interface IproductSellerExtra {
  purchases: number;
  nickname: string;
  birthday: string;
  membershipClass: 'MC01' | 'MC02';
  addressBook: Iaddress[];
}

// 상품 seller address 타입
export interface Iaddress {
  id: number;
  name: string;
  addressNumber: number;
  value: string;
}

// 상품 이미지 타입
export interface IproductImg {
  path: string;
  name: string;
  originalname: string;
}

// 상품 목록 조회시 상품 1개의 타입
export interface Iproduct {
  _id: number;
  seller_id: number;
  price: number;
  shippingFees: number;
  show: boolean;
  active: boolean;
  name: string;
  quantity: number;
  buyQuantity: number;
  bookmarks?: number;
  mainImages: Array<{
    path: string;
    name: string;
    originalname: string;
  }>;
  content?: Array<{
    path: string;
    name: string;
    originalname: string;
  }>;
  extra: IproductExtra;
  createdAt?: string;
  updatedAt?: string;
  seller?: IproductSeller;
  replies?: number;
  options?: number;
}

// 검색/필터용 extra 타입
export interface ProductExtraFilters {
  category?: string;
  condition?: ProductCondition;
  used?: boolean;
  isNew?: boolean;
  isBest?: boolean;
  platform?: PlatformName;
  platformVersion?: number | null;
  ageGrade?: AgeGrade;
  priceRange?: {
    min?: number;
    max?: number;
  };
  releaseDateRange?: {
    from?: string;
    to?: string;
  };
}

// 상품 목록 조회시 응답 타입
export interface IproductsListRes {
  ok: 0 | 1;
  item: Iproduct[];
}

// 필요한것만 골라쓰
export type IproductsNeeds = Pick<Iproduct, 'name'>;
