import { IcartItem } from '@/types/Cart';

export default function CartItem({ item }: { item: IcartItem }) {
  console.log(item);
  return (
    <>
      <h3>{item.product.name}</h3>
    </>
  );
}
