import { IproductExtra, IproductImg } from './products';

export interface Iorder {
  products:
    | {
        _id: number;
        quantity: number;
      }[]
    | [];
  address: {
    name: string;
    value: string;
    addressNumber: number;
  };
  payment: {
    success: boolean;
    pay_method: string;
    pg_type: string;
    card_name: string;
    card_num: string;
    pay_phone_num: string;
  };
  extra: {
    parcelmemo: string;
  };
}

export interface IorderProduct {
  _id: number;
  quantity: number;
  seller_id: number;
  name: string;
  image: IproductImg;
  price: number;
  extra: IproductExtra;
}

export interface IorderItem {
  products: IorderProduct[];
  address: {
    name: string;
    value: string;
    addressNumber: number;
  };
  payment: {
    success: boolean;
    pay_method: string;
    pg_type: string;
    card_name: string;
    card_num: string;
    pay_phone_num: string;
    phone_pay: string;
  };
  extra: {
    parcelmemo: string;
  };
  state: string;
  user_id: number;
  _id: number;
  createdAt: string;
  updatedAt: string;
  cost: {
    products: number;
    shippingFees: number;
    discount: {
      products: number;
      shippingFees: number;
    };
    total: number;
  };
}

export interface IorderRes {
  ok: 0 | 1;
  item: IorderItem;
}
