import Image from 'next/image';

import mainBannerPc from '@/assets/img/mainbanner-pc.webp';
import mainBannerTabelt from '@/assets/img/mainbanner-tablet.webp';
import mainBannerMobile from '@/assets/img/mainbanner-mobile.webp';

export default function MainPromotion() {
  return (
    <>
      <section className="w-full md:bg-[#131825]">
        <Image
          className="w-full md:hidden"
          src={mainBannerMobile}
          width={640}
          height={442}
          alt="포켓몬 레전드 ZA 10월 16일 발매확정! 포텐게임에서 확인하기"
        />
        <Image
          className="max-[768px] hidden md:block mx-auto lg:hidden"
          src={mainBannerTabelt}
          width={768}
          height={280}
          alt="포켓몬 레전드 ZA 10월 16일 발매확정! 포텐게임에서 확인하기"
        />
        <Image
          className="max-[1200px] hidden mx-auto lg:block"
          src={mainBannerPc}
          width={1200}
          height={200}
          alt="포켓몬 레전드 ZA 10월 16일 발매확정! 포텐게임에서 확인하기"
        />
      </section>
    </>
  );
}
