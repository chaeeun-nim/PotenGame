'use client';
import ItemNumSpinner from '@/components/list-ItemCard/ItemNumSpinner';
import { JSX } from 'react';

interface ItemNumInputProps {
  value?: number;
  onChange?: (value: number) => void;
}

export default function ItemNumInput({
  value = 1,
  onChange,
}: ItemNumInputProps): JSX.Element {
  // const [quantity, setQuantity] = useState(1);

  // onChange가 함수인지 확인하고 안전하게 호출하는 래퍼 함수
  const handleQuantityChange = (newValue: number) => {
    if (typeof onChange === 'function') {
      onChange(newValue);
    }
  };

  return (
    <section className="mx-2.5 my-[13px]">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <span className="text-base font-bold">젤다의 전설 야생의 숨결</span>
          <div className="flex flex-row justify-between items-center">
            <span className="text-sm">배송비 4,000원</span>
            <div className="hidden md:flex flex-row items-center gap-2">
              <span className="text-sm">수량</span>
              <ItemNumSpinner
                value={value}
                onChange={handleQuantityChange}
                min={1}
                max={99}
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-row items-center gap-2 justify-end">
          <span className="text-sm">수량</span>
          <ItemNumSpinner
            value={value}
            onChange={handleQuantityChange}
            min={1}
            max={99}
            className="md:hidden justify-end"
          />
        </div>
      </div>
      <hr className="border-poten-gray-2 mt-2 mb-4 md:mt-3 md:mb-5" />
      <div className="flex gap-1.5 xl:gap-2.5 items-center justify-end">
        <span className="text-base md:text-lg">총 상품 금액</span>
        <span className="text-2xl xl:text-[32px] text-poten-red font-bold">93,900원</span>
      </div>
    </section>
  );
}
