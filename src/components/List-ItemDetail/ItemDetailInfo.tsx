//!해당 component 사용은 일시 중단 됐습니다 (그래도 혹시 몰라서 삭제 안 하고 보류 해둡니다)
'use client';
/* 상품 상세 페이지 '/list/[id]' 하단부 (상품 상세 정보, 교환/반품 안내, 상품 후기) container를 구현한 컴포넌트입니다.(상품 상세 페이지 하단부) */

import ItemDetailImage from '@/components/List-ItemDetail/ItemDetailImage';
import ItemDetailNotice from '@/components/List-ItemDetail/ItemDetailNotice';
import ItemDetailReview from '@/components/List-ItemDetail/ItemDetailReview';

interface ItemDetailInfoProps {
  activeTab: string;
}

export default function ItemDetailInfo({ activeTab }: ItemDetailInfoProps) {
  const renderContent = () => {
    switch (activeTab) {
      case '상품 상세 정보':
        return <ItemDetailImage />;
      case '교환/반품 안내':
        return <ItemDetailNotice />;
      case '상품 후기':
        return <ItemDetailReview />;
      default:
        return <ItemDetailImage />;
    }
  };

  return (
    <div className="w-[360px] md:w-[768px] xl:w-[1200px] mx-auto pb-200">
      {renderContent()}
    </div>
  );
}
