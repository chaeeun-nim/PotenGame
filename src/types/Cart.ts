import { IproductExtra } from './products';

// 짱바구니 저장할때 보내느 폼의 타입
export interface IcartPostReq {
  products: IcartProductReq[];
}

// 장바구니 추가후 응답타입
export interface IcartPostRes {
  ok: 1 | 0;
  item: IcartItem[];
}

// 짱바구니 배열중 1개의 아이템
export interface IcartProductReq {
  _id: number;
  quantity: number;
}

// 장바구니 전체응답 타입
export interface IcartProductRes {
  ok: 0 | 1;
  item: IcartItem[];
  cost: IcartCost;
}

// 장바구니 삭제시 응답타입
export interface IcartDeletRes {
  item: IcartItem[];
  cost: IcartCost;
}

// 장바구니 안에있는 아이템 타입
export interface IcartItem {
  _id: number;
  quantity: number;
  product_id: number;
  createdAt: string;
  updatedAt: string;
  product: ICartProductItem;
}

export interface ICartProductItem {
  _id: number;
  name: string;
  price: number;
  seller_id: number;
  quantity: number;
  buyQuantity: number;
  image: ICartProductItemImg;
  extra: IproductExtra;
}

interface ICartProductItemImg {
  path: string;
  name: string;
  originalname: string;
}

export interface IcartCost {
  products: number | null;
  shippingFees: number | null;
  total: number | null;
  discount: IcartCostDiscount;
}

export interface IcartCostDiscount {
  products: number | null;
  shippingFees: number | null;
}
