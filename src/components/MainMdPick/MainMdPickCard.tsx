import Image from 'next/image';
import { MdItem } from './MdPickItemData';
import Link from 'next/link';

export default function MainMdPickCard({ cardItem }: { cardItem: MdItem }) {
  return (
    <>
      <Link href="/" className="w-full">
        <Image
          className="rounded-t-[8px]"
          src={cardItem.src}
          alt={cardItem.title}
          width={1920}
          height={1080}
        />
        <div
          className="bg-poten-snowgray1 p-[20px] rounded-b-[8px] md:h-[300px] flex flex-col
        justify-around gap-6  xl:p-[36px] leading-tight border-poten-gray-1 border-[1px]">
          <div>
            <p className="text-poten-gray-2 font-bold">{cardItem.platform}</p>
            <h3 className="text-poten-black truncate text-[20px] md:text-[28px] font-extrabold my-2">
              {cardItem.title}
            </h3>
            <p className="text-poten-gray3 leading-normal">{cardItem.contents}</p>
          </div>
          <div className="flex flex-col tracking-tighter">
            <p className="sr-only">가격정보</p>
            <p className="text-right text-[18px] md:text-[24px] text-poten-gray-2">
              <span className="sr-only">정상가</span>
              <s>{cardItem.originalPrice.toLocaleString()}원</s>
            </p>
            <p className="text-right font-extrabold text-poten-red text-[28px] md:text-[36px]">
              <span className="sr-only">최종 할인가</span>
              {cardItem.price.toLocaleString()}원
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
