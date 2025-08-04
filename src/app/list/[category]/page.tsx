/* 카테고리별 상품 목록 페이지 '/list/[category]' 구현한 페이지 입니다. */
import CategoryProductList from '@/components/CategoryProductList';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  return <CategoryProductList category={category} />;
}
