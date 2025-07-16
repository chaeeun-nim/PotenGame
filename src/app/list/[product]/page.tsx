import ItemCard from "@/app/list/[product]/[id]/page";
import PageBottomNav from "@/components/PageBottomNav";
import SelectBar from "@/components/SelectBar";

export default function ProductList() {
  return (
  <div className="w-full md:max-w-[768px] xl:max-w-[1280px] mx-auto md:px-6 xl:px-10">
    <SelectBar/>
    <div className="flex flex-wrap justify-center bg-black gap-[15px] xl:gap-[24px]">
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
    </div>
    <PageBottomNav/>
  </div>
);
}
