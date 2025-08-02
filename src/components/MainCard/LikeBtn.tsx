'use client';
import { useEffect, useState } from 'react';
import likeUnchecked from '@/assets/icons/heart-gray.svg';
import likeChecked from '@/assets/icons/heart-red.svg';
import Image from 'next/image';
import useLikeStore from '@/zustand/likeStore';
import { addLike } from '@/data/functions/addLike';
import useUserStore from '@/zustand/userStore';
import useLoginModal from '@/zustand/areyouLogin';
import { getLike } from '@/data/functions/getLike';

export default function LikeBtn({ productId }: { productId: number }) {
  const { Like, setLike } = useLikeStore();
  const { user } = useUserStore();
  const { openViewModal } = useLoginModal();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(Like?.some((item) => item.product._id === productId));
  }, [Like]);

  const handleAddLike = async () => {
    setIsLiked(true);
    await addLike(user?.token.accessToken as string, productId);
    const res = await getLike(user?.token.accessToken as string);
    if (res.ok) {
      setLike(res.item);
    }
  };
  const handleRemoveLike = () => {
    setIsLiked(false);
  };

  return (
    <button onClick={!user ? openViewModal : isLiked ? handleRemoveLike : handleAddLike}>
      <Image
        src={isLiked ? likeChecked : likeUnchecked}
        alt={isLiked ? '상품 찜하지 않기' : '상품 찜하기'}
        className="w-[30px] h-[30px]"
      />
    </button>
  );
}
