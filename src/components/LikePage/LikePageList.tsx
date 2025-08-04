'use client';

import useLikeStore from '@/zustand/likeStore';
import MainCard from '../MainCard/MainCard';

export default function LikePageList() {
  const { Like } = useLikeStore();
  if (Like.length === 0) {
    return <p>제품이 없음ㅋ</p>;
  }

  const LikeList = Like.map((item) => <MainCard key={item._id} item={item.product} />);

  return <>{LikeList}</>;
}
