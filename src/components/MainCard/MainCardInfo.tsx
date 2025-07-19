import { Iproduct } from '@/types/products';
import { isNewProducts } from './isNewProducts';
import { DateFormat } from './DateFormat';
import UsedTag from './UsedTag';
import NewTag from './NewTag';
import Link from 'next/link';
import noLikeIcon from '@/assets/icons/heart-gray.svg';
import Image from 'next/image';

export default function MainCardInfo({ item }: { item: Iproduct }) {
  const isNew = isNewProducts(item.extra.releaseDate);
  const releaseDate = DateFormat(item.extra.releaseDate);
  return (
    <>
      <div className="py-1 leading-[150%] ">
        <Link href={`/list/${item._id}`} className=" mb- flex flex-col p-0.5 md:p-2">
          <div className="flex flex-row gap-2  md:gap-4  items-center">
            {item.extra.used ? <UsedTag /> : isNew ? <NewTag /> : null}
            <p className="text-[12px] md:text-[16px] text-poten-gray-2">
              발매 {releaseDate}
            </p>
          </div>
          <p className="font-extrabold md:my-[8px] my-[2px] text-[18px] md:text-[20px] xl:text-[22px] text-poten-black line-clamp-1">
            {item.name}
          </p>
          <div className="tracking-tight leading-[120%] md:leading-[150%]">
            <p className=" font-bold text-poten-gray-2  text-[14px] xl:text-[16px]">
              <span className="sr-only">원가</span>
              <s>{item.extra.originalPrice.toLocaleString()}원</s>
            </p>
            <p className=" font-extrabold text-[18px] md:text-[22px] xl:text-[24px] text-poten-red">
              <span className="sr-only">최종 할인가</span>
              {item.price.toLocaleString()}원
            </p>
          </div>
        </Link>
        <div className="w-full bg-red-600 flex flex-row items-center justify-between">
          <button className="bg-poten-newblue ">담기</button>
          <button>
            <Image
              src={noLikeIcon}
              className="w-full"
              alt="찜하기"
              width={30}
              height={30}></Image>
          </button>
        </div>
      </div>
    </>
  );
}
