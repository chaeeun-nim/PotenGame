export interface IRecentOrder {
  id: number;
  state: 'OS010' | 'OS020' | 'OS030' | 'OS040'; // 주문 상태 코드
  createdAt: string; // 주문 생성일
  cost: {
    total: number; // 총 결제 금액
  };
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
