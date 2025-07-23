'use client';
import ItemNumSpinner from '@/components/List-ItemCard/ItemNumSpinner';
import { JSX, useState } from 'react';

export default function ItemNumInput(): JSX.Element {
  const [quantity, setQuantity] = useState(1)

  return (
    <section className="mx-2.5 my-[13px]">
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <span className='text-base font-bold'>젤다의 전설 야생의 숨결</span>
          <div className='flex flex-row justify-between items-center'>
            <span className='text-sm'>배송비 4,000원</span>
            <ItemNumSpinner
              value={quantity}
              onChange={setQuantity}
              min={1}
              max={99}
              className='hidden md:flex'
            />
          </div>
        </div>
        
        <ItemNumSpinner
          value={quantity}
          onChange={setQuantity}
          min={1}
          max={99}
          className='md:hidden justify-end'
        />
      </div>
      <hr className='border-poten-gray-2 mt-2 mb-4 md:mt-3 md:mb-5'/>
      <div className='flex gap-1.5 xl:gap-2.5 items-center justify-end'>
        <span className='text-base md:text-lg'>총 상품 금액</span>
        <span className='text-2xl xl:text-[32px] text-poten-red font-bold'>93,900원</span>
      </div>
    </section>
  );
}
