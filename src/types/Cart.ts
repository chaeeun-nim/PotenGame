import { Iproduct } from './products';

// 짱바구니 저장할때 보내느 폼의 타입
export interface IcartPostReq {
  products: IcartProductReq[];
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

// 장바구니 안에있는 아이템 타입
export interface IcartItem {
  _id: number;
  product_id: number;
  createdAt: string;
  updatedAt: string;
  product: Iproduct;
}

export interface IcartCost {
  products: number;
  shippingFees: number;
  total: number;
  discount: IcartCostDiscount;
}

export interface IcartCostDiscount {
  products: number;
  shippingFees: number;
}
