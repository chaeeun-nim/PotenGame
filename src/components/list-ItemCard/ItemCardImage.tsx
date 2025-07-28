'use client';
import { useItemCardContext } from '@/components/List-ItemCard/ItemCardContext';

export default function ItemCardImage() {
  const { variant } = useItemCardContext();

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

  return (
    <div
      className={`rounded-md flex justify-center items-center ${styles.container} border-1 border-poten-gray-1 bg-white`}>
      <div className={`flex justify-center items-center ${styles.image}`}>
        <img
          src="https://fesp-api.koyeb.app/market/files/febc13-final14-emjf/pro-27-thumbnail.webp"
          width={125}
          height={125}
          alt="item thumbnail"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
