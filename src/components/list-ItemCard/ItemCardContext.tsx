'use client'
import { Iproduct } from "@/types/products";
import { createContext, ReactNode, useContext } from "react";


// variant 타입 정의
export type ItemCardVariant = 'default' | 'detailed';

// Context에서 제공할 값 타입
interface ItemCardContextValue {
  variant: ItemCardVariant;
  productData?: Iproduct; // 상품 데이터 추가
}

const ItemCardContext = createContext<ItemCardContextValue | undefined>(undefined);

// Provider Props 타입
interface ItemCardProviderProps {
  children: ReactNode;
  variant: ItemCardVariant;
  productData?: Iproduct; // 상품 데이터 추가
}

export const ItemCardProvider = ({ children, variant, productData }: ItemCardProviderProps) => {
  const value: ItemCardContextValue = {
    variant,
    productData,
  }
  
  return (
    <ItemCardContext.Provider value={value}>
      {children}
    </ItemCardContext.Provider>
  );
};

export const useItemCardContext = () => {
  const context = useContext(ItemCardContext);
  if ( context === undefined ) {
    throw new Error('useItemCardContext 는 반드시 ItemCardProvider 내부에서 사용되어야 합니다.')
  }
  return context;
};

export default ItemCardContext;