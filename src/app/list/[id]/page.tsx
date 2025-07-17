import ItemCard from "@/components/list-ItemCard/ItemCard";

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
      <h1>
        상품 상세 페이지
      </h1>
      <ItemCard className="" />
    </>
  );
}
