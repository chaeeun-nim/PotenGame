import ItemCard from "@/components/list-ItemCard/ItemCard";
import SelectBar from "@/components/SelectBar";

// interface PageProps {
//   params: {
//     product: string;
//     id: string;
//   };
//   searchParams: { [key: string]: string | string[] | undefined };
// }

export default function ItemDetailPage() {
  return (
    <>
      <SelectBar variant="itemDetail" />
      <ItemCard variant="detailed" />
    </>
  );
}
