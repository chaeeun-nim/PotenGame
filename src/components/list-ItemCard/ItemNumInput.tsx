'use client';
import CartModal from '@/components/cart/CartModal';
import { useItemCardContext } from '@/components/list-ItemCard/ItemCardContext';
import ItemNumSpinner from '@/components/list-ItemCard/ItemNumSpinner';
import { JSX, useMemo, useState } from 'react';

interface ItemNumInputProps {
  value?: number;
  onChange?: (value: number) => void;
}

export default function ItemNumInput({
  value = 1,
  onChange,
}: ItemNumInputProps): JSX.Element {
  const [currentQuantity, setCurrentQuantity] = useState(value);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 상품 기본값 설정
  const defaultData = {
    _id: 1,
    name: '젤다의 전설 야생의 숨결',
    price: 89900,
    extra: {
      originalPrice: 1000000,
      releaseDate: '2008-05-24',
      used: false,
      platform: 'Nintendo Switch',
      condition: '미사용 중고',
      ageGrade: '전체 이용가',
      language: '음성-영어,일본어 / 자막-한국어',
    },
    shippingFees: 4000,
    bookmarks: 240,
    quantity: 5,
  };

  const { productData } = useItemCardContext();
  const data = productData || defaultData;

  // 동적 가격 계산
  const calculatedPrice = useMemo(() => {
    const quantity = currentQuantity;
    const itemTotal = data.price * value;
    const shippingFee = quantity >= 5 ? 0 : data.shippingFees;
    const totalPrice = itemTotal + shippingFee;

    return {
      itemTotal,
      shippingFee,
      totalPrice,
    };
  }, [data.price, data.shippingFees, currentQuantity]);

  // 가격을 원화 형식으로 포맷팅하는 함수
  const formatPrice = (price: number): string => {
    return price.toLocaleString('ko-KR') + '원';
  };

  // onChange가 함수인지 확인하고 안전하게 호출하는 래퍼 함수
  const handleQuantityChange = (newValue: number) => {
    setCurrentQuantity(newValue);
    if (typeof onChange === 'function') {
      onChange(newValue);
    }
  };

  return (
    <>
      <section className="mx-2.5 my-[13px]">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="text-base font-bold">{data.name}</span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-sm">
                배송비{' '}
                {calculatedPrice.shippingFee === 0
                  ? '무료'
                  : formatPrice(calculatedPrice.shippingFee)}
                {value >= 5 && calculatedPrice.shippingFee === 0 && (
                  <span className="text-poten-green ml-1">(5개 이상 무료배송)</span>
                )}
              </span>
              <div className="hidden md:flex flex-row items-center gap-2">
                <span className="text-sm">수량</span>
                <ItemNumSpinner
                  value={currentQuantity}
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
              value={currentQuantity}
              onChange={handleQuantityChange}
              min={1}
              max={99}
              className="md:hidden justify-end"
            />
          </div>
        </div>
        <hr className="border-poten-gray-2 mt-2 mb-4 md:mt-3 md:mb-5" />
        {/* 가격 상세 정보 */}
        <div className="flex flex-col gap-2 mb-3">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>상품금액 ({currentQuantity}개)</span>
            <span>{formatPrice(calculatedPrice.itemTotal)}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>배송비</span>
            <span className={calculatedPrice.shippingFee === 0 ? 'text-poten-green' : ''}>
              {calculatedPrice.shippingFee === 0
                ? '무료'
                : formatPrice(calculatedPrice.shippingFee)}
            </span>
          </div>
        </div>
        <div className="flex gap-1.5 xl:gap-2.5 items-center justify-end">
          <span className="text-base md:text-lg">총 상품 금액</span>
          <span className="text-2xl xl:text-[32px] text-poten-red font-bold">
            {formatPrice(calculatedPrice.totalPrice)}
          </span>
        </div>
      </section>
      {/* 장바구니 추가 확인 모달 */}
      <CartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={data.name}
      />
    </>
  );
}
