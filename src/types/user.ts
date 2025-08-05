import { Iaddress } from './products';
import { IRecentOrder } from './RecentOrder';

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
  phone?: string;
  address?: string;
  type: 'admin' | 'seller' | 'user';
  loginType?: 'email';
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  extra?: IuserExtra;
  notifications?: Array<string>;
  token: IuserToken;
  bookmark?: IuserBookmark;
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
  address: Iaddress[];
  orders?: IRecentOrder[];
}

export interface IuserBookmark {
  products?: number; // 상품에 대한 관심 표시 수
  users?: number;   // 다른 사용자를 팔로우하거나 북마크한 수?
  posts?: number;   // 게시글에 대한 북마크 수
}


export interface UserState {
  user: Iuser | null;
  setUser: (user: Iuser) => void;
  resetUser: () => void;
}
