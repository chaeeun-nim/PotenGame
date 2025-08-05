// src/types/MyAddress.ts

export interface MyAddress {
  id: number;
  name: string; // 예: '회사'
  value: string; // 예: '서울시 강동구 천호동 123'
  addressNumber: string; // 예: 12345
  phone: string; // 예: '01012345678'
  isDefault?: boolean;
  isSelected?: boolean;
}
