import ItemCardImage from '@/components/list-ItemCard/ItemCardImage'
import ItemCardInfo from '@/components/list-ItemCard/ItemCardInfo'

export default function ItemCard() {
  return (
  <div className='w-[150px] h-[238px] md:w-[229px] md:h-[310px] xl:w-[282px] xl:h-[350px] bg-red-500 flex flex-col'>
    <ItemCardImage/>
    <ItemCardInfo/>
  </div>
);
}
