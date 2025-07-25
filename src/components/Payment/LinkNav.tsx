import Link from 'next/link';
import Right from '@/assets/icons/right.svg';
import Image from 'next/image';

export default function LinkNav() {
  return (
    <>
      <div className="w-full xl:max-w-[1200px] ml-auto mx-auto justify-end  text-[16px] flex gap-4 font-medium text-poten-gray-2">
        <Link href="/cart">장바구니</Link>
        <Image src={Right} alt="화살표" />
        <Link href="/" className="text-poten-black font-bold">
          주문/결제
        </Link>
        <Image src={Right} alt="화살표" />
        <p>결제완료</p>
      </div>
    </>
  );
}
