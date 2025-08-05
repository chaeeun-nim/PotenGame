'use client';
import ItemDetailHeader from '@/components/List-ItemDetail/ItemDetailHeader';
import ItemDetailImage from '@/components/List-ItemDetail/ItemDetailImage';
import ItemDetailNotice from '@/components/List-ItemDetail/ItemDetailNotice';
import ItemDetailReview from '@/components/List-ItemDetail/ItemDetailReview';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* 상품 상세 페이지 '/list/[id]' 하단부 (상품 상세 정보, 교환/반품 안내, 상품 후기)를 구현한 컴포넌트입니다.(상품 상세 페이지 하단부) */
interface ItemDetailProps {
  // ItemCard가 페이지에 있을 시 ref 받도록 props 추가
  itemCardRef?: React.RefObject<HTMLElement>;
  productId?: string;
  category?: string;
}

export default function ItemDetail({ itemCardRef }: ItemDetailProps) {
  const params = useParams();
  const category = params.category as string;
  const productId = params.id as string;

  const [activeSection, setActiveSection] = useState<string>('상품 상세 정보');
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const itemDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // 방법1: ItemCard ref가 제공 됨
      if (itemCardRef?.current) {
        const ItemCardBottom =
          itemCardRef.current.offsetTop + itemCardRef.current.offsetHeight;
        const headerOffset = 50; // 약간의 여유 공간
        setIsHeaderSticky(scrollPosition >= ItemCardBottom - headerOffset);
      }

      // 방법2: ItemDetail 위치 기준으로 (fallback)
      else if (itemDetailRef.current) {
        const itemDetailTop = itemDetailRef.current.offsetTop;
        const headerOffset = 100;
        setIsHeaderSticky(scrollPosition >= itemDetailTop - headerOffset);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallBack = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallBack, observerOptions);

    // 각 섹션을 관찰 대상으로 등록
    const section = document.querySelectorAll('[data-section]');
    section.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 상태 설정

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 75; // sticky header 높이
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div ref={itemDetailRef}>
      <ItemDetailHeader
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        isSticky={isHeaderSticky}
      />

      {/* 모든 섹션을 한 페이지에 배치 */}
      <div className="mx-4 xl:w-[1200px] xl:mx-auto">
        <section
          id="detail-image"
          data-section="상품 상세 정보"
          className="scroll-mt-20 mb-20">
          <ItemDetailImage productId={productId} category={category} />
        </section>
        <section
          id="detail-notice"
          data-section="교환/반품 안내"
          className="scroll-mt-20 mb-20">
          <ItemDetailNotice />
        </section>
        <section
          id="detail-review"
          data-section="상품 후기"
          className="scroll-mt-20 mb-20">
          <ItemDetailReview productId={productId} />
        </section>
      </div>
    </div>
  );
}
