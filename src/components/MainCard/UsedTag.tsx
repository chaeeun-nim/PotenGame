import usedTagIcon from '@/assets/icons/used-tag.svg';
import Image from 'next/image';

export default function UsedTag() {
  return (
    <>
      <div className="items-center flex flex-row text-[14px] font-extrabold italic text-poten-usedorange">
        <Image
          src={usedTagIcon}
          className="w-[12px] md:w-[16px]"
          alt="중고"
          width={30}
          height={30}
        />
        <p>S급중고</p>
      </div>
    </>
  );
}
