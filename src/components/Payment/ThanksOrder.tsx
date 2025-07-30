import Image from 'next/image';
import checkImg from '@/assets/img/check.png';
import Link from 'next/link';

export default function ThanksOrder() {
  return (
    <>
      <div className="m-12 md:m-16">
        <Image
          className="w-[80px] md:w-[120px] mx-auto mb-4"
          src={checkImg}
          width={300}
          height={300}
          alt="구매완료"
        />
        <h2 className="font-bold text-[18px] text-center">
          포텐게임을 이용해주셔서 감사합니다.
          <br />
          주문이 완료되었습니다.
        </h2>
        <div className="flex gap-4 mx-auto justify-center items-center">
          <Link
            href="/"
            className="px-[24px] mt-4 py-[4px] md:px-[58px] md:py-[6px] bg-poten-red  text-white font-bold rounded-4xl text-[16px] md:text-[20px]">
            메인으로 이동
          </Link>
        </div>
      </div>
    </>
  );
}
