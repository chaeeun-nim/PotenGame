// import Image from 'next/image';
// import ItemThumbnail from '@/assets/img/top-banner.png'

export default function ItemCardImage() {
  return (
    <div className="rounded-md flex justify-center items-center w-[150px] h-[101px] md:w-[229px] md:h-[142px] xl:w-[282px] xl:h-[182px] border-1 border-poten-gray-1">
      <div className="flex justify-center items-center w-[50px] h-[69px] md:w-[70px] md:h-[98px] xl:w-[88px] xl:h-[123px]">
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
