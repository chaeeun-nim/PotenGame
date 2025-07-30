'use client';
/* ItemDetail 중 Header (상품 상세 정보, 교환/반품 안내, 상품 후기) tab을 구현한 컴포넌트입니다. */

interface ItemDetailHeaderProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isSticky: boolean;
}

export default function ItemDetailHeader({
  activeSection,
  onSectionClick,
  isSticky,
}: ItemDetailHeaderProps) {
  const tabs = [
    { name: '상품 상세 정보', id: 'detail-image' },
    { name: '교환/반품 안내', id: 'detail-notice' },
    { name: '상품 후기', id: 'detail-review' },
  ];

  const handleTabClick = (tab: { name: string; id: string }) => {
    onSectionClick(tab.id);
  };

  return (
    <section
      className={`w-full z-50 transition-all duration-300 ease-in-out
        ${isSticky ? 'fixed top-0 left-0 bg-white shadow-xs' : 'relative'}`}>
      <div
        className={`mx-4 xl:w-[1200px] xl:mx-auto
          ${isSticky ? 'py-3' : 'pt-17'}`}>
        <ul className="flex flex-row">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              onClick={() => handleTabClick(tab)}
              className={`w-[119px] h-[29px] md:w-[138px] md:h-[35px] xl:w-[208px] xl:h-[47px] flex justify-center items-center
                ${activeSection === tab.name ? 'bg-poten-gray3 text-white' : 'hover:bg-poten-gray-1'}`}>
              {tab.name}
            </li>
          ))}
        </ul>
        <hr className={`border-1 border-poten-gray-2 ${isSticky ? 'mt-0' : 'mb-2'}`} />
      </div>
    </section>
  );
}
