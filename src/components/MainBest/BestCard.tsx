'use client';

import { Iproduct } from '@/types/products';
import Image from 'next/image';
import logo from '../../../public/logo/logo-horizon-white.svg';
import Link from 'next/link';

export default function BestCard({
  items,
  opacity,
}: {
  items: Iproduct[];
  opacity: string;
}) {
  const firstItem = items[0];
  const othersItem = items.slice(1);

  const borderClass =
    firstItem.extra.platform === 'Nintendo Switch'
      ? 'border-poten-nintendo'
      : 'border-poten-psblue';

  const bgClass =
    firstItem.extra.platform === 'Nintendo Switch'
      ? 'bg-poten-nintendo'
      : 'bg-poten-psblue';

  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:p-[8px]">
        <Link
          href={`/list/${firstItem._id}`}
          className={`col-span-12 md:col-span-6 border-4 ${borderClass} bg-white rounded-lg pb-[36px] px-[36px]`}>
          <div
            className={`${bgClass} px-[16px] py-[8px] md:px-[28px]  inline-block rounded-b-xl mb-[18px] md:mb-[28px]`}>
            <Image
              className={`w-[150px] h-auto `}
              src={logo}
              width={122}
              height={17}
              alt="포텐게임"
            />
            <p className="font-extrabold text-white text-[28px]">Best Seller</p>
          </div>
          <Image
            className={`w-[300px] mx-auto md:w-[400px] xl:w-[450px] ${opacity} transition-all ease-in-out duration-500`}
            src={`https://fesp-api.koyeb.app/market/${firstItem?.mainImages[0].path}`}
            alt="대표이미지"
            width={600}
            height={600}></Image>
        </Link>
        <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4 content-start">
          {othersItem.map((item, i) => {
            return (
              <Link
                href={`/list/${item._id}`}
                key={item._id}
                className="border-1 rounded-md border-poten-gray-1 p-[16px] bg-white">
                <p className="font-extrabold mb-[16px] text-poten-gray3 leading-tight lg:text-[22px]">
                  <span className="text-[24px] lg:text-[32px]">0{i + 2}</span>위
                </p>
                <Image
                  className={`w-[180px] mx-auto xl:w-[220px] ${opacity} transition-all ease-in-out duration-500`}
                  src={`https://fesp-api.koyeb.app/market/${item?.mainImages[0].path}`}
                  alt="대표이미지"
                  width={300}
                  height={300}></Image>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
