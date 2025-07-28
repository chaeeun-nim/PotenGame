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
  };
  extra: {
    parcelmemo: string;
  };
}
