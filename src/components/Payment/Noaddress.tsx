import Image from 'next/image';
import exclamationIcon from '@/assets/icons/exclamation-gray.svg';

export default function Noaddress() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center py-4 md:py-6 ">
        <Image
          className="w-[36px] md:w-[48px]"
          src={exclamationIcon}
          width={80}
          height={80}
          alt="등록 배송지 없음"
        />
        <p className="text-[18px] font-bold text-poten-gray-2 mt-4">
          등록된 배송지가 없습니다.
        </p>
      </div>
    </>
  );
}
