'use client'
import { useItemCardContext } from "@/components/list-ItemCard/ItemCardContext";


export default function ItemCardImage() {
  const { variant } = useItemCardContext()

  const getImageStyles = () => {
    switch (variant) {
      case 'detailed':
        return {
          container: "w-[336px] h-[250px] md:w-[351px] md:h-[388px] xl:w-[429px] xl:h-[429px]",
          image: "w-[211px] h-[211px] md:w-[283px] md:h-[283px]"
        };
      default:
        return {
          container: "w-[150px] h-[101px] md:w-[229px] md:h-[142px] xl:w-[282px] xl:h-[182px]",
          image: "w-[50px] h-[69px] md:w-[70px] md:h-[98px] xl:w-[88px] xl:h-[123px]"
        };
    }
  }

  const styles = getImageStyles()

  return (
    <div className={`rounded-md flex justify-center items-center ${styles.container} border-1 border-poten-gray-1 bg-white`}>
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
