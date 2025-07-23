import ItemCard from "@/components/List-ItemCard/ItemCard";
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
    <div className="bg-poten-snowgray1">
      <SelectBar variant="itemDetail" />
      <ItemCard variant="detailed" />
    </div>
  );
}
