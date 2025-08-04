export interface signUpItem{
  id: number;
  email: string;
  name: string;
  phone: string;
  password: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface signUpRes{
  ok: 0 | 1;
  item: signUpItem;
}
