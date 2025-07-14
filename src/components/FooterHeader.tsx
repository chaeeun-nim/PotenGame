import Image from 'next/image';
import logoWhite from '../../public/logo/logo-horizon-white.svg';
import footerArrow from '@/assets/icons/footer-arrow.svg';

export default function FooterHeader() {
  return (
    <>
      <header className="w-full lg:max-w-[1200px] mx-auto p-[12px] flex justify-between">
        <Image
          src={logoWhite}
          className="w-[180px] "
          alt="포텐게임"
          width={180}
          height={24}
        />
        <button type="button" className="bg-white p-[4px] rounded-full">
          <Image src={footerArrow} alt="위로가는 화살표" width={24} height={24} />
        </button>
      </header>
    </>
  );
}
