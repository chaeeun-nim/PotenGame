
// 주문 상태 코드
export type OrderStatusCode = 'OS010' | 'OS020' | 'OS030' | 'OS040';

// 주문 요약 응답 타입
export interface IOrderSummaryRes {
  state: OrderStatusCode;
  count: number;
}
