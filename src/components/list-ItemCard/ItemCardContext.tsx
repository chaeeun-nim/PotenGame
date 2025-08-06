// src/components/list-ItemCard/ItemCardContext.tsx
'use client';
import { Iproduct } from '@/types/products';
import { createContext, ReactNode, useContext } from 'react';

// variant 타입 정의
export type ItemCardVariant = 'default' | 'detailed';

interface ExtendedProductData extends Iproduct {
  isLiked?: boolean;
  optimisticLikeCount?: number;
  isLikeLoading?: boolean;
}

// Context에서 제공할 값 타입
interface ItemCardContextValue {
  variant: ItemCardVariant;
  productData?: ExtendedProductData;
}

const ItemCardContext = createContext<ItemCardContextValue | undefined>(undefined);

// Provider Props 타입
interface ItemCardProviderProps {
  children: ReactNode;
  variant: ItemCardVariant;
  productData?: ExtendedProductData;
}

export function ItemCardProvider({
  children,
  variant,
  productData,
}: ItemCardProviderProps) {
  return (
    <ItemCardContext.Provider value={{ variant, productData }}>
      {children}
    </ItemCardContext.Provider>
  );
}

export function useItemCardContext() {
  const context = useContext(ItemCardContext);
  if (context === undefined) {
    throw new Error('useItemCardContext must be used within an ItemCardProvider');
  }
  return context;
}
