import Image from 'next/image';
import exclamationIcon from '@/assets/icons/exclamation-gray.svg';

export default function NoNotice({ title }: { title: string }) {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center py-4 md:py-6 ">
        <Image
          className="w-[36px] md:w-[48px]"
          src={exclamationIcon}
          width={80}
          height={80}
          alt={title}
        />
        <p className="text-[18px] font-bold text-poten-gray-2 mt-4">{title}</p>
      </div>
    </>
  );
}
