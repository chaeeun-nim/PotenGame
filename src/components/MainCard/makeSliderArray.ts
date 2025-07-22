import { Iproduct } from '@/types/products';

export function dataArray(data: Iproduct[], num: number) {
  const result = [];

  for (let i = 0; i < data.length; i += num) {
    result.push(data.slice(i, i + num));
  }
  return result;
}
