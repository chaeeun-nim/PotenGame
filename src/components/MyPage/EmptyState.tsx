'use client';

import Image from 'next/image';
import EmptyIcon from '@/assets/img/errorimg.png';

export default function EmptyState({
  message = '최근 주문한 상품이 없습니다.',
}: {
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-3">
      <Image
        src={EmptyIcon}
        alt="empty"
        width={56}
        height={56}
        className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] xl:w-[64px] xl:h-[64px]"
      />
      <p className="text-[14px] md:text-[15px] xl:text-[16px] text-[var(--color-poten-gray-2)] font-medium text-center">
        {message}
      </p>
    </div>
  );
}
