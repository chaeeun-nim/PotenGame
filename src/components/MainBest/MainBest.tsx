import BestSellerTabs from './BestSellerTabs';

export default async function MainBest() {
  return (
    <>
      <section className="mt-12 xl:max-w-[1200px] mx-auto mb-[80px]">
        <h2 className="sr-only md:not-sr-only text-[22px] md:px-[24px] font-bold">
          역대 최다판매
        </h2>
        <BestSellerTabs />
      </section>
    </>
  );
}
