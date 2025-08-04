'use client';

import Image from 'next/image';
import logoWhite from '../../public/logo/logo-horizon-white.svg';
import footerArrow from '@/assets/icons/footer-arrow.svg';

export default function FooterHeader() {
  function scrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <section className="w-full lg:max-w-[1200px] mx-auto p-[12px] md:px-[18px] md:py-[24px]  flex justify-between">
        <h2>
          <Image
            src={logoWhite}
            className="w-[180px] md:w-[230px] lg:w-[260px]"
            alt="포텐게임"
            width={180}
            height={24}
          />
        </h2>
        <button
          type="button"
          onClick={scrollUp}
          className="bg-white p-[6px] md:p-[10px] cursor-pointer rounded-full">
          <Image
            src={footerArrow}
            className="w-[18px] md:w-[20px] lg:w-[24px]"
            alt="위로가는 화살표"
            width={24}
            height={24}
          />
        </button>
      </section>
    </>
  );
}
