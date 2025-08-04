import MainCard from '@/components/MainCard/MainCard';
import SectionHeader from '@/components/SectionHeader';
import { searchProducts } from '@/data/functions/searchProducts';
import exclamationIcon from '@/assets/icons/exclamation-gray.svg';
import NotFoundPage from '../not-found';
import Image from 'next/image';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ keyword?: string }>;
}) {
  const { keyword } = await searchParams;
  if (!keyword) {
    return <NotFoundPage />;
  }

  const res = await searchProducts(keyword);

  if (res.ok) {
    const result = res.item;

    if (result.length === 0) {
      return (
        <>
          <SectionHeader>
            검색결과 <span className="text-poten-gray-2">0</span> 건
          </SectionHeader>
          <section className="py-[150px]">
            <div className="w-full flex flex-col justify-center items-center py-4 md:py-6 ">
              <Image
                className="w-[36px] md:w-[48px]"
                src={exclamationIcon}
                width={80}
                height={80}
                alt="검색결과 없음"
              />
              <p className="text-[18px] font-bold text-poten-gray-2 mt-4">
                검색 결과가 없습니다.
              </p>
            </div>
          </section>
        </>
      );
    } else {
      const itemList = result.map((item) => (
        <MainCard key={item._id} item={item}></MainCard>
      ));
      return (
        <>
          <SectionHeader>
            검색결과 <span className="text-poten-red">{result.length.toString()}</span> 건
          </SectionHeader>
          <div className="xl:max-w-[1200px] pb-[150px] px-4 md:px-6 xl:px-0 mx-auto grid grid-cols-2 xl:grid-cols-4 gap-y-16 gap-x-4 md:gap-x-6 md:grid-cols-3">
            {itemList}
          </div>
        </>
      );
    }
  }
}
