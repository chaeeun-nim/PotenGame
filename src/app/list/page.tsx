/* 상품 상세 페이지 '/list' 구현한 페이지 입니다. */

import ItemCard from '@/components/List-ItemCard/ItemCard';
import MainPromotion from '@/components/MainPromotion';
import Pagination from '@/components/Pagination';
import SelectBar from '@/components/SelectBar';

export default function ProductList() {
  return (
    <>
      <MainPromotion />
      <header className="mx-4 xl:max-w-[1280px] xl:mx-auto my-8">
        <SelectBar variant="default" />
      </header>
      <section className="bg-poten-snowgray1 xl:px-10 xl:mx-auto">
        <section className="py-8 flex flex-col justify-center">
          <h1 id="product-list-heading" className="sr-only">
            상품목록
          </h1>
          <ul className="xl:max-w-[1280px] xl:mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-[24px] place-items-center px-4 xl:px-0">
            {/** flex flex-wrap md:grid md:grid-cols-3 */}
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
            <li>
              <ItemCard />
            </li>
          </ul>
        </section>
        <div className="pb-6 xl:max-w-[1280px] mx-auto flex justify-center">
          <Pagination />
        </div>
      </section>
    </>
  );
}
