import { getNewProducts } from '@/data/functions/products';
import Image from 'next/image';

export default async function MainBest() {
  const data = await getNewProducts();
  return (
    <>
      <section>베스트섹션</section>
      {data.ok
        ? data.item.map((item, i) => (
            <div key={i}>
              {item.name}
              <Image
                src={`https://fesp-api.koyeb.app/market/${item.mainImages[0].path}`}
                alt="대표이미지"
                width={300}
                height={300}></Image>
            </div>
          ))
        : '데이터 조회 실패'}
    </>
  );
}
