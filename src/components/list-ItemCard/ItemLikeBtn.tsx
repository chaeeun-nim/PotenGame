'use client';
import { useEffect, useState } from 'react';
import likeUnchecked from '@/assets/icons/heart-gray.svg';
import likeChecked from '@/assets/icons/heart-red.svg';
import Image from 'next/image';
import useLikeStore from '@/zustand/likeStore';
import useUserStore from '@/zustand/userStore';
import useLoginModal from '@/zustand/areyouLogin';
import { addLike } from '@/data/functions/addLike';
import { getLike } from '@/data/functions/getLike';
import { removeLike } from '@/data/functions/removeLike';

export interface ItemLikeBtnProps {
  className?: string;
  productId: number;
}

export default function ItemLikeBtn({ className, productId }: ItemLikeBtnProps) {
  const { Like, likeNum, addLikeNum, removeLikeNum, setLike, removeLikeStore } =
    useLikeStore();
  const [btnActive, setBtnActive] = useState(false);
  const { user } = useUserStore();
  const { openViewModal } = useLoginModal();

  const [isLiked, setIsLiked] = useState(false);

  // 좋아요 상태 확인
  useEffect(() => {
    if (!user || !Like) {
      return setIsLiked(false);
    }
    setIsLiked(likeNum?.some((item) => item === productId) || false);
  }, [likeNum, productId, user, Like]);

  // 좋아요 추가 함수
  const handleAddLike = async () => {
    if (!user) {
      openViewModal(); // 로그인 모달 열기
      return;
    }

    setIsLiked(true);
    setBtnActive(true);
    addLikeNum(productId);

    try {
      await addLike(user.token.accessToken, productId);
      const res = await getLike(user.token.accessToken);
      if (res.ok) {
        setLike(res.item);
      } else {
        // 실패 시 롤백
        removeLikeNum(productId);
        setIsLiked(false);
      }
    } catch (error) {
      console.error('좋아요 추가 실패:', error);
      // 에러 시 롤백
      removeLikeNum(productId);
      setIsLiked(false);
    } finally {
      setBtnActive(false);
    }
  };

  // 좋아요 제거 함수
  const handleRemoveLike = async () => {
    if (!user) {
      openViewModal(); // 로그인 모달 열기
      return;
    }
    setIsLiked(false);
    setBtnActive(true);
    removeLikeNum(productId);

    const LikeId = Like.find((item) => item.product._id === productId);
    removeLikeStore(productId);

    try {
      await removeLike(user.token.accessToken, LikeId?._id as number);
    } catch (error) {
      console.error('좋아요 제거 실패:', error);
    } finally {
      setBtnActive(false);
    }
  };

  const handleLikeClick = () => {
    // 로그인 확인을 최우선으로
    if (!user) {
      openViewModal();
      return;
    }

    // 로그인된 상태에서만 좋아요 기능 실행
    if (isLiked) {
      handleRemoveLike();
    } else {
      handleAddLike();
    }
  };

  return (
    <button
      onClick={handleLikeClick}
      disabled={btnActive}
      className={`transition-transform ${btnActive ? 'scale-95' : 'hover:scale-105'} ${
        btnActive ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      aria-label={isLiked ? '상품 찜하지 않기' : '상품 찜하기'}>
      {btnActive ? (
        // 로딩 상태 표시
        <div className={`${className || 'w-5 h-5'} flex items-center justify-center`}>
          <div className="w-4 h-4 border-2 border-t-transparent border-current rounded-full animate-spin"></div>
        </div>
      ) : (
        <Image
          src={isLiked ? likeChecked : likeUnchecked}
          alt={isLiked ? '상품 찜하지 않기' : '상품 찜하기'}
          className={className || 'w-5 h-5'}
        />
      )}
    </button>
  );
}
