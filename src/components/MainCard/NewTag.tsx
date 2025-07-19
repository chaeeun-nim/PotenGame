import newTagIcon from '@/assets/icons/new-tag.svg';
import Image from 'next/image';

export default function NewTag() {
  return (
    <>
      <div className="items-center flex flex-row text-[12px] md:text-[16px] font-extrabold italic text-poten-newblue">
        <Image
          src={newTagIcon}
          className="w-[12px] md:w-[16px]"
          alt="특급신상"
          width={30}
          height={30}
        />
        <p>특급신상</p>
      </div>
    </>
  );
}
