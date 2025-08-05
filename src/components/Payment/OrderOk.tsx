'use client';

import { getOrder } from '@/data/functions/getOrder';
import { IorderItem } from '@/types/payorder';
import useUserStore from '@/zustand/userStore';
import { useEffect, useState } from 'react';
import ThanksOrder from './ThanksOrder';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function OrderOk({ id }: { id: string }) {
  const { user } = useUserStore();
  const [data, setData] = useState<IorderItem | null>(null);
  const router = useRouter();

  useEffect(() => {
    const dataFetch = async () => {
      const res = await getOrder(user?.token.accessToken as string, id);
      if (res.ok) {
        setData(res.item);
      }
      if (res.ok === 0) {
        router.push('/not-found');
      }
    };

    dataFetch();
  }, [user?.token.accessToken, id]);

  if (data === null) return null;

  const productList = data.products.map((item) => (
    <div
      key={item._id}
      className="bg-white border-y-1   xl:border-1 border-poten-gray-1 flex flex-col gap-4 leading-tight w-full mx-auto xl:max-w-[894px] p-4 md:p-6 ">
      <div className="flex gap-4">
        <div className="w-[100px] h-[100px]  border-1 border-poten-gray-1 flex justify-center items-center rounded-[4px]">
          <Image
            className="w-[80%]"
            src={item.image.path}
            alt={item.image.originalname}
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text-sm">
            {item.extra.platform === 'Nintendo NDS'
              ? '닌텐도 DS'
              : item.extra.platform === 'Nintendo Switch'
                ? '닌텐도 스위치'
                : '플레이스테이션'}
            {item.extra.platform !== 'Nintendo NDS' ? item.extra.platformVersion : null}
          </p>
          <h6 className="text-[18px] font-bold flex items-center gap-1">
            {item.name}
            {item.extra.used ? (
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
              (data.cost.shippingFees ?? 0) - (data.cost.discount.shippingFees ?? 0)
            ).toLocaleString()}
            원
          </p>
        </div>
        <div className="flex justify-between">
          <p>상품금액</p>
          <p className=" font-bold">
            {((item.price ?? 0) * (item.quantity ?? 1)).toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <ThanksOrder />
      <div>
        <div className="px-0 md:px-6 xl:px-0 w-full xl:max-w-[894px] mx-auto ">
          <div className="bg-white w-full p-4 md:p-7 border-y md:border-1 border-poten-gray-1">
            <p className="text-poten-gray-2 text-[16px]">{data.createdAt}</p>
            <p className="font-medium text-[16px]">
              주문번호 {data._id}
              {data.createdAt.replace(/\D/g, '')}
            </p>
          </div>
        </div>
        <h3
          className=" xl:max-w-[894px] mx-auto w-full  font-bold xl:mt-[40px] md:mt-[36px] mt-[20px]  mb-[16px] 
      text-[20px] md:text-[22px] pl-[16px] md:pl-[24px] xl:pl-[0px]">
          주문상품
        </h3>
        <div className="flex flex-col gap-4">{productList}</div>
        <h3
          className=" xl:max-w-[894px] mx-auto w-full  font-bold xl:mt-[40px] md:mt-[36px] mt-[20px]  mb-[16px] 
      text-[20px] md:text-[22px] pl-[16px] md:pl-[24px] xl:pl-[0px]">
          배송지
        </h3>
        <div className="px-0 md:px-6 xl:px-0 w-full xl:max-w-[894px] mx-auto">
          <div className="bg-white w-full p-4 md:p-7 border-y md:border-1 border-poten-gray-1">
            <p className="font-bold text-[18px]">
              {data.address.name}({user?.name})
            </p>
            <p className="text-poten-gray-2 text-[14px]">
              휴대폰 번호{' '}
              {user?.phone && user?.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
            </p>
            <p className="font-medium text-[16px]">{data.address.value}</p>
            <p className="text-poten-gray-2 text-[14px]">
              ({data.address.addressNumber})
            </p>
          </div>
        </div>
        <h3
          className=" xl:max-w-[894px] mx-auto w-full  font-bold xl:mt-[40px] md:mt-[36px] mt-[20px]  mb-[16px] 
      text-[20px] md:text-[22px] pl-[16px] md:pl-[24px] xl:pl-[0px]">
          결제정보
        </h3>
        <div className="px-0 md:px-6 xl:px-0 w-full xl:max-w-[894px] mx-auto">
          <div className="bg-white w-full p-4 md:p-7 border-y md:border-1 border-poten-gray-1">
            <div className="flex justify-between mb-1">
              <p className="font-bold text-[18px]">주문금액</p>
              <p className="font-bold text-poten-red text-[20px]">
                {data.cost.total.toLocaleString()}원
              </p>
            </div>
            <div className="py-1 pl-4 border-l-4 border-poten-gray-1">
              <div className="flex justify-between">
                <p className="font-medium text-[16px]">총 상품금액</p>
                <p className="font-bold text-[18px]">
                  {data.cost.products.toLocaleString()}원
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-[16px]">단골할인</p>
                <p className="font-bold text-[18px] text-poten-red">
                  -{data.cost.discount.products.toLocaleString()}원
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-[16px]">배송비</p>
                <p className="font-bold text-[18px]">
                  {(
                    data.cost.shippingFees - data.cost.discount.shippingFees
                  ).toLocaleString()}
                  원
                </p>
              </div>
            </div>
            <hr className="m-4 w-full mx-auto border-poten-gray-1" />
            <div className="flex justify-between mb-1">
              <p className="font-bold text-[18px]">{data.payment.pay_method}</p>
              <p className="font-bold text-poten-red text-[20px]">
                {data.cost.total.toLocaleString()}원
              </p>
            </div>
            {data.payment.pay_method === '신용카드' && (
              <div className="py-1 pl-4 border-l-4 border-poten-gray-1">
                <p className="font-medium text-[18px]">
                  {data.payment.card_name} {data.payment.card_num}
                </p>
                <p className="text-poten-gray-2 text-[16px]">
                  무이자 적용 여부는 카드사로 문의하시면 정확하게 확인하실 수 있습니다.
                </p>
              </div>
            )}
            {data.payment.pay_method === '휴대폰 결제' && (
              <div className="py-1 pl-4 border-l-4 border-poten-gray-1">
                <p className="font-medium text-[18px]">{data.payment.phone_pay}</p>
                <p className="text-poten-gray-2 text-[16px]">
                  휴대폰결제 취소 및 환불금액은 통신사에 문의하시길 바랍니다.
                </p>
              </div>
            )}
            {data.payment.pay_method === '무통장 입금' && (
              <>
                <div className="py-1 pl-4 border-l-4 border-poten-gray-1">
                  <p className="font-medium text-[18px]">농협은행 3333-05-8451268</p>
                  <p className="text-poten-gray-2 text-[16px]">예금주 : (주)포텐게임</p>
                </div>
                <p className="text-poten-red text-[16px] font-bold mt-4">
                  3일 이내에 미입금시 자동으로 주문이 취소됩니다.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
