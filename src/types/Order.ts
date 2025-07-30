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
