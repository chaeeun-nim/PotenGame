import ItemCard from '@/components/list-ItemCard/ItemCard';
import ItemDetail from '@/components/List-ItemDetail/ItemDetail';
import SelectBar from '@/components/SelectBar';

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
      <div className="bg-poten-snowgray1">
        <SelectBar variant="itemDetail" />
        <ItemCard variant="detailed" />
      </div>
      <ItemDetail />
    </>
  );
}
