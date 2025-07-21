'use client'
import { createContext, ReactNode, useContext } from "react";


// variant 타입 정의
export type ItemCardVariant = 'default' | 'detailed';

// Context에서 제공할 값 타입
interface ItemCardContextValue {
  variant: ItemCardVariant;
  // 필요 시 기타 상태 추가 가능
}

const ItemCardContext = createContext<ItemCardContextValue | undefined>(undefined);

// Provider Props 타입
interface ItemCardProviderProps {
  children: ReactNode;
  variant: ItemCardVariant;
}

export const ItemCardProvider = ({ children, variant }: ItemCardProviderProps) => {
  const value: ItemCardContextValue = {
    variant,
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