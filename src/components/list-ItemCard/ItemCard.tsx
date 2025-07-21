// src/components/ItemCard.tsx
import { ItemCardProvider, ItemCardVariant } from '@/components/list-ItemCard/ItemCardContext';
import ItemCardImage from '@/components/list-ItemCard/ItemCardImage';
import ItemCardInfo from '@/components/list-ItemCard/ItemCardInfo';
import Link from 'next/link';

interface ItemCardProps {
  variant?: ItemCardVariant;
  className?: string;
}

export default function ItemCard({ variant = 'default', className }: ItemCardProps) {
  const getCardStyles = () => {
    switch (variant) {
      case 'detailed':
        return 'w-[336px] md:w-[714px] xl:w-[1199px] flex flex-col mx-auto md:grid';
      default:
        return 'w-[150px] h-[238px] md:w-[229px] md:h-[310px] xl:w-[282px] xl:h-[350px]';
    }
  };

  return (
    <ItemCardProvider variant={variant} >
      <div className={`${getCardStyles()} ${className || ''}`}>
        <Link href={'/list/1'}>
          <ItemCardImage />
        </Link>
        <ItemCardInfo />
      </div>
    </ItemCardProvider>
  );
}
