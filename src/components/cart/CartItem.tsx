import { IcartItem } from '@/types/Cart';

export default function CartItem({ item }: { item: IcartItem }) {
  return (
    <>
      <h3>{item.product.name}</h3>
    </>
  );
}
