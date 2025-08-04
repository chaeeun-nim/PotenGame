'use client';

import { IcartItem } from '@/types/Cart';
import Image from 'next/image';
import DeliveryDate from './DeliveryDate';
import Link from 'next/link';
import { JSX, useEffect, useState } from 'react';

import { isNewProducts } from '../MainCard/isNewProducts';
import UsedTag from '../MainCard/UsedTag';
import NewTag from '../MainCard/NewTag';
import RemoveCartBtn from './RemoveCartPageBtn';
import { removeCart } from '@/data/functions/removeCart';
import CartCountForm from './CartCountForm';
import useCartStore from '@/zustand/cartStore';
import CartItemCost from './CartItemCost';
import useUserStore from '@/zustand/userStore';

export default function CartItem({ item }: { item: IcartItem }) {
  const [view, setview] = useState(true);

  // 제품의 상태(중고, 신상)임을 판별하여 적절한 택을 달아주는 상태
  const [Tags, setTags] = useState<JSX.Element | null>(null);
  const setCart = useCartStore((state) => state.setCart);
  const setCost = useCartStore((state) => state.setCost);
  const user = useUserStore((state) => state.user);

  const deleteHandle = async () => {
    setview(false);
    const res = await removeCart(user?.token.accessToken as string, item._id);
    if (res.ok) {
      setCart(res.item);
      setCost(res.cost);
    }
  };

  useEffect(() => {
    const isNew = isNewProducts(item.product.extra.releaseDate); //신상이면 true 아니면 false

    if (item.product.extra.used) {
      // 중고품목 체크 조건문
      setTags(<UsedTag />); // 중고면 중고 택
    } else if (isNew) {
      setTags(<NewTag />); // 중고가 아니고 신상품이면 신상 택
    } else {
      setTags(null); // 둘중에 아무것도 아니면 택 없이
    }
  }, []); // eslint 경고 무시

  let platform;

  if (item.product.extra.category?.includes('NINTENDO02')) {
    platform = '닌텐도 스위치 2';
  } else if (item.product.extra.category?.includes('NINTENDO01')) {
    platform = '닌텐도 스위치 1';
  } else if (item.product.extra.category?.includes('PLAYSTATION05')) {
    platform = '플레이스테이션 5';
  } else if (item.product.extra.category?.includes('PLAYSTATION04')) {
    platform = '플레이스테이션 4';
  } else if (item.product.extra.category?.includes('NINTENDONDS')) {
    platform = '닌텐도 DS';
  }

  return (
    <>
      {view ? (
        <div
          className="bg-white w-full mb-3 p-[16px] md:p-[32px]
        [box-shadow:rgba(99,99,99,0.2)_0px_2px_8px_0px]">
          <div className="flex  align-middle leading-tight ">
            <div className="flex gap-[16px] md:gap-[20px] xl:gap-[24px] items-center  w-full ">
              <Link
                href={`/list/${item.product_id}`}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]  shrink-0 flex items-center justify-center  border-1 border-poten-gray-1">
                <Image
                  className="w-[80px] md:w-[100px]"
                  src={item.product.image.path}
                  alt={item.product.name}
                  width={500}
                  height={500}
                />
              </Link>

              <div className=" flex flex-col gap-1 min-w-0  md:gap-2 md:h-full md:py-3 xl:w-full">
                <p className="font-medium text-poten-gray-2 text-[14px] md:text-[16px] md:font-bold">
                  <DeliveryDate />
                </p>
                <p className="text-[14px] md:text-[15px]">{platform}</p>

                <p className="text-poten-black font-bold w-full block text-[18px] md:text-[20px] truncate">
                  {item.product.name}
                </p>

                <span className="block">{Tags}</span>
                <p className=" mt-[18px] mb-1 md:m-[0px] hidden md:block text-poten-black ">
                  제품금액
                  <span className="text-[20px]  ml-5 font-bold">
                    {item.product.price.toLocaleString()}원
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-start ">
              <RemoveCartBtn deleteHandle={deleteHandle} />
            </div>
          </div>

          <p className="text-right mt-[18px]  mb-1 md:m-[0px] md:hidden  text-poten-black ">
            제품금액
            <span className="text-[20px] ml-5 font-bold">
              {item.product.price.toLocaleString()}원
            </span>
          </p>
          <div>
            <div>
              {item.product.quantity - item.product.buyQuantity >= 1 ? (
                /* 수량 수정 - 상품수량과 카트 ID전달 */
                <CartCountForm
                  cartId={item._id}
                  quantity={item.quantity}
                  maxquaintity={item.product.quantity - item.product.buyQuantity}
                />
              ) : null}

              <hr className="border-1 border-poten-gray-1 my-[16px]" />
              {item.product.quantity - item.product.buyQuantity >= 1 ? (
                <CartItemCost cartId={item._id} />
              ) : (
                <div className="flex justify-between items-start leading-[26px] xl:pb-[0px] pb-[16px] md:justify-end">
                  <p className="font-extrabold text-poten-gray-2 text-[26px]">품절</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
