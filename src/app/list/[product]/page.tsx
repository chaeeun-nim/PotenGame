import ItemCard from "@/app/list/[product]/[id]/page";
import PageBottomNav from "@/components/PageBottomNav";
import SelectBar from "@/components/SelectBar";

export default function ProductList() {
  return (
  <div className="max-w-[1200px] mx-auto">
    <SelectBar/>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
    <PageBottomNav/>
  </div>
);
}
