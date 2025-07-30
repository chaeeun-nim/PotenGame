// src/types/sort.ts
/* SelectBar 상품 목록, 상품 상세 리스트 등에 쓰이는 select 컴포넌트에 쓰이는 type 정의입니다. */
export type SortType =
  | '-extra.releaseDate'
  | 'extra.releaseDate'
  | '-createdAt'
  | 'createdAt'
  | '-price'
  | 'price'
  | 'name'
  | '-name'
  | '-buyQuantity'
  | '-replies';
