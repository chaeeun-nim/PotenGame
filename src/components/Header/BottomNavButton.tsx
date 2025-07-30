import Image from "next/image";
import Link from "next/link";

interface BottomNavButtonType{
  address: string;
  imageSrc:string;
  title: string;

}

export default function BottomNavButton({address, imageSrc, title}: BottomNavButtonType){
  return(
    <li>
      <Link href={address}>
        <Image src={imageSrc} alt={title} className="m-auto" width={16} height={16}/>
        <span>{title}</span>
      </Link>
    </li>
  )
}