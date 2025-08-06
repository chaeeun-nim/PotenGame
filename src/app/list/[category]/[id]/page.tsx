// src/app/list/[category]/[id]/page.tsx
import NotFoundPage from '@/app/not-found';
import ItemCard from '@/components/list-ItemCard/ItemCard';
import ItemDetail from '@/components/List-ItemDetail/ItemDetail';
import SelectBar from '@/components/SelectBar';
import { getProductDetailById } from '@/data/functions/listProducts';

interface PageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ItemDetailPage({ params }: PageProps) {
  const { category, id } = await params;

  // 상품 상세 정보 호출
  const productResponse = await getProductDetailById(id, category);

  // 상품 호출 실패 시 404 페이지 이동
  if (productResponse.ok === 0 || !productResponse.item) {
    return <NotFoundPage />;
  }

  const productData = productResponse.item;

  return (
    <>
      <div className="bg-poten-snowgray1">
        <SelectBar variant="itemDetail" />
        <ItemCard
          variant="detailed"
          productData={productData}
          productId={id}
          category={category}
        />
      </div>
      <ItemDetail productId={id} category={category} productData={productData} />
    </>
  );
}

// SEO 최적화 (메타데이터 생성)
export async function generateMetadata({ params }: PageProps) {
  const { category, id } = await params;
  const productResponse = await getProductDetailById(id, category);

  if (productResponse.ok === 0 || !productResponse.item) {
    return {
      title: '상품을 찾을 수 없습니다 | 포텐게임',
      description: '요청하신 상품을 찾을 수 없습니다.',
    };
  }

  const product = productResponse.item;

  return {
    title: `${product.name} | 포텐게임`,
    description: `${product.name} - ${product.price.toLocaleString()}원. ${product.extra?.condition || '상품'} 상태의 ${product.extra?.platform || '게임'} 상품입니다.`,
    openGraph: {
      title: `${product.name} | 포텐게임`,
      description: `${product.name} - ${product.price.toLocaleString()}원`,
      images: product.mainImages?.[0]?.path
        ? [
            {
              url: product.mainImages[0].path,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ]
        : [],
    },
  };
}
