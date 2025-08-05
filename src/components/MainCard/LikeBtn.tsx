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
import { removeLike } from '@/data/functions/removeLike';

export default function LikeBtn({ productId }: { productId: number }) {
  const { Like, likeNum, addLikeNum, removeLikeNum, setLike, removeLikeStore } =
    useLikeStore();
  const [btnActive, setBtnActive] = useState(false);
  const { user } = useUserStore();
  const { openViewModal } = useLoginModal();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!user || !Like) {
      return setIsLiked(false);
    }
    setIsLiked(likeNum?.some((item) => item === productId));
  }, [likeNum]);

  const handleAddLike = async () => {
    setIsLiked(true);
    setBtnActive(true);
    addLikeNum(productId);
    await addLike(user?.token.accessToken as string, productId);
    const res = await getLike(user?.token.accessToken as string);
    if (res.ok) {
      setLike(res.item);
      setBtnActive(false);
    } else {
      removeLikeNum(productId);
    }
  };

  const handleRemoveLike = async () => {
    setIsLiked(false);
    setBtnActive(true);
    removeLikeNum(productId);
    const LikeId = Like.find((item) => item.product._id === productId);
    removeLikeStore(productId);
    await removeLike(user?.token.accessToken as string, LikeId?._id as number);
    setBtnActive(false);
  };

  return (
    <button
      disabled={btnActive}
      onClick={!user ? openViewModal : isLiked ? handleRemoveLike : handleAddLike}>
      <Image
        src={isLiked ? likeChecked : likeUnchecked}
        alt={isLiked ? '상품 찜하지 않기' : '상품 찜하기'}
        className="w-[30px] h-[30px]"
      />
    </button>
  );
}
