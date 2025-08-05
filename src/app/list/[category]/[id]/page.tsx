import ItemCard from '@/components/list-ItemCard/ItemCard';
import ItemDetail from '@/components/List-ItemDetail/ItemDetail';
import SelectBar from '@/components/SelectBar';

interface PageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ItemDetailPage({ params }: PageProps) {
  const { category, id } = await params;
  // const resolvedSearchParams = await searchParams;

  return (
    <>
      <div className="bg-poten-snowgray1">
        <SelectBar variant="itemDetail" />
        <ItemCard variant="detailed" productId={id} category={category} />
      </div>
      <ItemDetail productId={id} category={category} />
    </>
  );
}
