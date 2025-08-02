import { IproductExtra, IproductImg } from './products';

// 북마크 products 타입지정
export interface IbookmarksItem {
  _id: number; //북마크 ID
  user_id: number;
  createAt: string;
  product: IbookmarksProducts;
}

export interface IbookmarksProducts {
  _id: number; //제품 ID
  name: string;
  price: number;
  quantity: number;
  buyQuantity: number;
  mainImages: IproductImg[];
  extra: IproductExtra;
}

export interface IbookmarksRes {
  ok: 0 | 1;
  item: IbookmarksItem[];
}

export interface addLikeAddRes {
  ok: 0 | 1;
  item: {
    type: string;
    user_id: number;
    target_id: number;
    user: {
      _id: number;
      name: string;
      email: string;
      image: string;
    };
    _id: number;
    createAt: string;
  };
}
