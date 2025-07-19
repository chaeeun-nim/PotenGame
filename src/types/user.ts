import { Iaddress } from './products';

// 로그인시 응답
export interface ILoginRes {
  ok: 0 | 1;
  item: Iuser;
}

// 유저 1명의 데이터
export interface Iuser {
  _id: number;
  email: string;
  name: string;
  phone: string;
  address: string;
  type: 'admin' | 'seller' | 'user';
  loginType: 'email';
  image: string;
  createdAt: string;
  updatedAt: string;
  extra: IuserExtra;
  notifications: Array<string>;
  token: IuserToken;
}

export interface IuserToken {
  accessToken: string;
  refreshToken: string;
}

export interface IuserExtra {
  purchases: number;
  nickname: string;
  birthday: string;
  membershipClass: 'MC01' | 'MC02';
  addressBook: Iaddress[];
}
