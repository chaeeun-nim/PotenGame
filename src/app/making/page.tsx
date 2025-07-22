'use client';

import { useRouter } from 'next/navigation';
import poten1004 from '@/assets/img/poten1004.png';
import Image from 'next/image';
import Link from 'next/link';

export default function MakinPage() {
  const rounter = useRouter();
  return (
    <section className="w-full bg-poten-snowgray1 py-[80px] md:py-[100px] xl:py-[120px]">
      <Image
        className="w-[120px] md:w-[230px] mx-auto"
        src={poten1004}
        alt="포텐게임 개발자이미지"
        width={900}
        height={764}
      />
      <h1 className="text-center font-medium py-[24px] md:py-[36px] text-[16px] md:text-[20px]">
        포텐천사들이 페이지를 제작하고 있어요! <br />
        다음에 시도해 주세요!
      </h1>
      <div className="flex gap-4 mx-auto justify-center items-center">
        <button
          className="px-[24px] py-[4px] md:px-[50px] md:py-[10px] cursor-pointer text-white bg-poten-red font-bold rounded-4xl block  text-[16px] md:text-[20px]"
          onClick={rounter.back}>
          이전 페이지
        </button>
        <Link
          href="/about"
          className="px-[24px] py-[4px] md:px-[50px] md:py-[10px] bg-white border-[1px] border-poten-red text-poten-red font-bold rounded-4xl text-[16px] md:text-[20px]">
          프로젝트 소개
        </Link>
      </div>
    </section>
  );
}
