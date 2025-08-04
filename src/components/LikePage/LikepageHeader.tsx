'use client';

import useLikeStore from '@/zustand/likeStore';

export default function LikepageHeader() {
  const { Like } = useLikeStore();

  return (
    <>
      {Like.length === 0 ? (
        <header className="  w-full gap-4 xl:max-w-[1200px]  xl:mx-auto  mb-[18px] md:mb-[32px]">
          <div className="flex gap-4 border-b-2 border-poten-gray-1 pb-[14px] md:pb-[20px] justify-start items-center">
            <span className="block w-[5px] h-[20px] md:h-[24px] rounded-[2px] bg-poten-red"></span>
            <h1 className="font-bold text-[18px] xl:text-[22px]">
              찜목록 <span className="text-poten-gray-2">0</span> 건
            </h1>
          </div>
        </header>
      ) : (
        <header className="  w-full gap-4 xl:max-w-[1200px]  xl:mx-auto  mb-[18px] md:mb-[32px]">
          <div className="flex gap-4 border-b-2 border-poten-gray-1 pb-[14px] md:pb-[20px] justify-start items-center">
            <span className="block w-[5px] h-[20px] md:h-[24px] rounded-[2px] bg-poten-red"></span>
            <h1 className="font-bold text-[18px] xl:text-[22px]">
              찜목록 <span className="text-poten-red">{Like.length}</span> 건
            </h1>
          </div>
        </header>
      )}
    </>
  );
}
