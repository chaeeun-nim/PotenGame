'use client';

import useLikeStore from '@/zustand/likeStore';
import MainCard from '../MainCard/MainCard';
import NoNotice from '../Payment/NoNotice';

export default function LikePageList() {
  const { Like } = useLikeStore();
  if (Like.length === 0) {
    return (
      <div className=" w-full flex md:mt-[100px] justify-center items-center">
        <NoNotice title="찜한 상품이 없습니다." />
      </div>
    );
  }

  const LikeList = Like.map((item) => <MainCard key={item._id} item={item.product} />);

  return (
    <>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-16">{LikeList}</div>
    </>
  );
}
