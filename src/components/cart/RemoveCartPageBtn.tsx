'use client';

import Image from 'next/image';
import closeIcon from '@/assets/icons/closebtn.svg';

export default function RemoveCartPageBtn({
  deleteHandle,
}: {
  deleteHandle: () => void;
}) {
  return (
    <>
      <button onClick={deleteHandle} type="button" className="cursor-pointer">
        <Image src={closeIcon} width={20} height={20} alt="삭제버튼" />
      </button>
    </>
  );
}
