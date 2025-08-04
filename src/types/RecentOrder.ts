export interface IRecentOrder {
  id: number;             // 주문 ID
  productId: number;      // 상품 상세 페이지용 ID
  status: string;
  title: string;
  date: string;
  price: string;
   image: {
    path: string;
    name?: string;  // 썸네일 파일 이름
    originalname?: string;  
  };
}
