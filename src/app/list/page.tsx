import ItemCard from '@/components/list-ItemCard/ItemCard';
import MainPromotion from '@/components/MainPromotion';
import Pagination from '@/components/Pagination';
import SelectBar from '@/components/SelectBar';

export default function ProductList() {
  return (
    <section className="w-full mx-auto md:px-6 xl:px-10">
      <header className='md:max-w-[768px] xl:max-w-[1280px] mx-auto my-8'>
        <SelectBar />
      </header>
      <MainPromotion />
      <section className='w-full bg-poten-snowgray1 py-8 flex flex-col justify-center'>
        <h1 id='product-list-heading' className='sr-only'>상품목록</h1>
        <ul className="md:max-w-[768px] xl:max-w-[1280px] flex flex-wrap justify-center md:grid md:grid-cols-3 xl:grid-cols-4 gap-[15px] xl:gap-[24px] mx-auto my-4">
          <li><ItemCard /></li>
          <li><ItemCard /></li>
          <li><ItemCard /></li>
          <li><ItemCard /></li>
          <li><ItemCard /></li>
          <li><ItemCard /></li>
          <li><ItemCard /></li>
          <li><ItemCard /></li>
          <li><ItemCard /></li>
          <li><ItemCard /></li>
          <li><ItemCard /></li>
          <li><ItemCard /></li>
        </ul>
      
        <div className='md:max-w-[768px] xl:max-w-[1280px] mx-auto flex justify-center'>
          <Pagination />
        </div>
      
      </section>
    </section>
  );
}
