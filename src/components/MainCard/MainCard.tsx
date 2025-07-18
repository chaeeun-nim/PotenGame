import { Iproduct } from '@/types/products';
import Image from 'next/image';
import NintendoSwitchIcon from '../../assets/icons/nintendoIcon.svg';
import PsIcon from '../../assets/icons/psicon.svg';
import NintendoDsIcon from '../../assets/icons/nintendods.svg';

export default function MainCard({ item }: { item: Iproduct }) {
  let PlatformIcons;
  let PlatformColor;
  switch (item.extra.platform) {
    case 'Nintendo Switch': {
      PlatformIcons = NintendoSwitchIcon;
      break;
    }
    case 'Nintendo NDS': {
      PlatformIcons = NintendoDsIcon;
      break;
    }
    case 'PlayStation': {
      PlatformIcons = PsIcon;
      break;
    }
  }
  switch (item.extra.platform) {
    case 'Nintendo Switch': {
      PlatformColor = 'bg-poten-nintendo';
      break;
    }
    case 'Nintendo NDS': {
      PlatformColor = 'bg-poten-nintendo';
      break;
    }
    case 'PlayStation': {
      PlatformColor = 'bg-poten-psblue';
      break;
    }
  }

  return (
    <>
      <li>
        <div className="rounded-[8px] bg-white overflow-hidden shadow">
          <div
            className={`${PlatformColor} flex gap-1 justify-center items-center py-1 `}>
            <Image
              src={PlatformIcons}
              alt={item.extra.platform}
              className="w-5 h-auto "
              width={36}
              height={36}
            />
            <p className="font-extrabold text-[20px] text-white leading-[100%]">
              {item.extra.platform !== 'Nintendo NDS' ? item.extra.platformVersion : null}
            </p>
          </div>
          <Image
            className="mx-auto p-4 w-[150px]"
            src={`https://fesp-api.koyeb.app/market/${item.mainImages[0].path}`}
            alt={item.mainImages[0].name}
            width={100}
            height={100}></Image>
        </div>
        <p>{item.name}</p>
      </li>
    </>
  );
}
