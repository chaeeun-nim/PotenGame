export interface IRecentOrder {
  id: number;
  status: string;
  date: string;
  price: string;
  products: {
    _id: number;
    name: string;
    image: {
      path: string;
      name?: string;
      originalname?: string;
    };
  }[];
}
