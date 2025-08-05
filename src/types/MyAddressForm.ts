// src/types/MyAddressForm.ts
export interface MyAddressForm {
  id: string;             // 고유 ID
  label: string;          // 배송지 이름 (예: 집, 회사)
  address: string;        // 상세 주소
  zip: string;            // 우편번호 (string이 맞음)
  phone: string;          // 수취인 전화번호
  isDefault?: boolean;    // 기본 주소 여부 (선택적)
  isSelected?: boolean;   // 현재 선택된 주소 여부 (선택적)
}
