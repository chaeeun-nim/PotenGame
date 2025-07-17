// src/components/ItemCard.tsx
import ItemCardImage from '@/components/list-ItemCard/ItemCardImage';
import ItemCardInfo from '@/components/list-ItemCard/ItemCardInfo';
import { ItemLikeBtnProps } from '@/components/list-ItemCard/ItemLikeBtn';
import Link from 'next/link';

export default function ItemCard({ className }: ItemLikeBtnProps) {
  return (
    <div className="w-[150px] h-[238px] md:w-[229px] md:h-[310px] xl:w-[282px] xl:h-[350px] flex flex-col">
      <Link href={'/list/1'}>
        <ItemCardImage />
      </Link>
      <ItemCardInfo className={className || ''} />
    </div>
  );
}