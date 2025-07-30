'use client';
import { useItemCardContext } from '@/components/List-ItemCard/ItemCardContext';

export default function ItemCardImage() {
  const { variant, productData } = useItemCardContext();

  const getImageStyles = () => {
    switch (variant) {
      case 'detailed':
        return {
          container: 'h-[250px] md:mr-10 md:h-[388px] xl:h-[560px]',
          image: 'w-[211px] h-[211px] md:w-auto md:h-[330px] xl:w-[429px] xl:h-[429px]',
        };
      default:
        return {
          container:
            'w-full aspect-[3/2] rounded-md flex justify-center items-center border-1 border-poten-gray-1 bg-white',
          image: 'w-1/2 flex justify-center items-center',
        };
    }
  };

  const styles = getImageStyles();

  // 이미지 URL 결정 (productData가 있을 시 사용, 없을면 기본값)
  const imageUrl = productData?.mainImages?.[0]?.path
    ? `http://fesp-api.koyeb.app/market/${productData.mainImages[0].path}`
    : 'http://fesp-api.koyeb.app/market/files/febc13-final14-emjf/pro-27-thumbnail.webp';

  const imageAlt =
    productData?.mainImages?.[0]?.name || productData?.name || 'item thumbnail';

  return (
    <div
      className={`rounded-md flex justify-center items-center ${styles.container} border-1 border-poten-gray-1 bg-white`}>
      <div className={`flex justify-center items-center ${styles.image}`}>
        <img
          src={imageUrl}
          width={125}
          height={125}
          alt={imageAlt}
          className="object-cover w-full h-full"
          onError={(e) => {
            // 이미지 로드 실패시 기본 이미지 대체
            const target = e.target as HTMLImageElement;
            target.src =
              'http://fesp-api.koyeb.app/market/files/febc13-final14-emjf/pro-27-thumbnail.webp';
          }}
        />
      </div>
    </div>
  );
}
