import ItemList from "@/app/list/[product]/[id]/page";
import PageBottomNav from "@/components/PageBottomNav";
import SelectBar from "@/components/SelectBar";

export default function ProductList() {
  return (
  <>
    <h1>상품리스트</h1>
    <SelectBar/>
    <ItemList/>
    <ItemList/>
    <ItemList/>
    <ItemList/>
    <ItemList/>
    <PageBottomNav/>
  </>
);
}
