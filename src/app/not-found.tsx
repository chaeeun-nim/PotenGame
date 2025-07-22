'use client';

import { useRouter } from 'next/navigation';
import errorImg from '@/assets/img/errorimg.png';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <section className="w-full bg-poten-snowgray1 py-[80px] md:py-[100px] xl:py-[120px]">
      <Image
        className="w-[120px] md:w-[230px] mx-auto"
        src={errorImg}
        alt="에러이미지"
        width={800}
        height={711}
      />
      <h1 className="text-center font-medium py-[24px] md:py-[36px] text-[16px] md:text-[20px]">
        존재하지 않는 페이지에 접근하셨군요! <br />
        무엇을 찾고 계셨나요?
      </h1>
      <div className="flex gap-4 mx-auto justify-center items-center">
        <button
          className="px-[24px] py-[4px] md:px-[50px] md:py-[10px] cursor-pointer text-white bg-poten-red font-bold rounded-4xl block  text-[16px] md:text-[20px]"
          onClick={router.back}>
          이전으로 이동
        </button>
        <Link
          href="/"
          className="px-[24px] py-[4px] md:px-[50px] md:py-[10px] bg-white border-[1px] border-poten-red text-poten-red font-bold rounded-4xl text-[16px] md:text-[20px]">
          메인으로 이동
        </Link>
      </div>
    </section>
  );
}
