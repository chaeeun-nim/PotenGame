'use clinet';

import useCartStore from '@/zustand/cartStore';
import Image from 'next/image';

export default function OrderList() {
  const { cart, cost } = useCartStore();

  const productList = cart.map((item) => (
    <div
      key={item._id}
      className="bg-white border-y-1  xl:border-1 border-poten-gray-1 flex flex-col gap-4 leading-tight w-full mx-auto xl:max-w-[894px] p-4 md:p-6 ">
      <div className="flex gap-4">
        <div className="w-[100px] h-[100px]  border-1 border-poten-gray-1 flex justify-center items-center rounded-[4px]">
          <Image
            className="w-[80%]"
            src={`https://fesp-api.koyeb.app/market/${item.product.image.path}`}
            alt={item.product.name}
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text-sm">
            {item.product.extra.platform === 'Nintendo NDS'
              ? '닌텐도 DS'
              : item.product.extra.platform === 'Nintendo Switch'
                ? '닌텐도 스위치'
                : '플레이스테이션'}
            {item.product.extra.platform !== 'Nintendo NDS'
              ? item.product.extra.platformVersion
              : null}
          </p>
          <h6 className="text-[18px] font-bold flex items-center gap-1">
            {item.product.name}
            {item.product.extra.used ? (
              <span className="bg-poten-red text-[12px] rounded-[2px] px-2 py-0.5 text-white font-bold">
                중고
              </span>
            ) : null}{' '}
          </h6>
          <p className="text-sm text-bold text-poten-gray-2">상품수량:{item.quantity}</p>
        </div>
      </div>
      <hr className="border-poten-gray-1" />
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p>배송비</p>
          <p className=" font-bold">
            {(
              (cost.shippingFees ?? 0) - (cost.discount.shippingFees ?? 0)
            ).toLocaleString()}
            원
          </p>
        </div>
        <div className="flex justify-between">
          <p>상품금액</p>
          <p className=" font-bold">
            {((item.product.price ?? 0) * (item.quantity ?? 1)).toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex flex-col gap-4 ">
        {productList}
        <div className="px-4 md:px-6">
          <div
            className="flex justify-between mt-4 items-center w-full
          mx-auto xl:max-w-[894px] bg-poten-red text-white px-4 py-2 md:py-4 rounded-[4px] md:rounded-[8px] font-bold">
            <p className="font-medium">총 주문금액</p>
            <p className="text-[24px]">{cost.total?.toLocaleString()}원</p>
          </div>
        </div>
        <div className="px-4 md:px-6 xl:px-0 ">
          <div className=" px-4 py-1 md:py-2 border-l-8 border-poten-gray-1 w-full mx-auto xl:max-w-[894px]">
            <div className="flex justify-between">
              <p className="text-[16px] md:text-[18px] font-medium">전체 상품금액</p>
              <p className="font-bold text-[18px] md:tex-[20px]">
                {cost.products?.toLocaleString()}원
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] md:text-[18px] font-medium">배송비</p>
              <p className="font-bold  text-[18px] md:tex-[20px]">
                {(
                  (cost.shippingFees ?? 0) - (cost.discount.shippingFees ?? 0)
                ).toLocaleString()}
                원
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] md:text-[18px] font-medium">단골할인</p>
              <p className="font-bold text-poten-red  text-[18px] md:tex-[20px]">
                -{(cost.discount.products ?? 0).toLocaleString()}원
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
