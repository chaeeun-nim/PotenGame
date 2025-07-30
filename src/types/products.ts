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
  platformVersion: number;
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
  mainImages: IproductImg[];
  createdAt: string;
  updatedAt: string;
  extra: IproductExtra;
  seller: IproductSeller;
  replies: number;
  bookmarks: number;
  options: number;
}

// 상품 목록 조회시 응답 타입
export interface IproductsListRes {
  ok: 0 | 1;
  item: Iproduct[];
}

// 필요한것만 골라쓰
export type IproductsNeeds = Pick<Iproduct, 'name'>;
