import Image from 'next/image';
import Link from 'next/link';
import noCartImg from '@/assets/img/nocartimg.png';

export default function Nocart() {
  return (
    <>
      <section className="w-full bg-poten-snowgray1 py-[80px] md:py-[100px] xl:py-[120px]">
        <Image
          className="w-[120px] md:w-[230px] mx-auto"
          src={noCartImg}
          alt="장바구니가 비었어요!"
          width={500}
          height={462}
        />
        <h1 className="text-center font-medium py-[24px] md:py-[36px] text-[16px] md:text-[20px]">
          장바구니가 비었습니다. <br />
          인생 게임으로 장바구니를 채워보세요!
        </h1>
        <div className="flex gap-4 mx-auto justify-center items-center">
          <Link
            href="/"
            className="px-[24px] py-[4px] md:px-[50px] md:py-[10px] cursor-pointer text-white bg-poten-red font-bold rounded-4xl block  text-[16px] md:text-[20px]">
            제품 둘러보기
          </Link>
          <Link
            href="/"
            className="px-[24px] py-[4px] md:px-[50px] md:py-[10px] bg-white border-[1px] border-poten-red text-poten-red font-bold rounded-4xl text-[16px] md:text-[20px]">
            메인으로 이동
          </Link>
        </div>
      </section>
    </>
  );
}
