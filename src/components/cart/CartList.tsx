import { IcartItem } from '@/types/Cart';
import CartItem from './CartItem';
import Nocart from './Nocart';

export default function CartList({ items }: { items: IcartItem[] }) {
  const cartList = items.map((item) => <CartItem item={item} key={item._id} />);

  return (
    <>
      <div className="xl:max-w-[1200px] mx-auto">
        {cartList.length === 0 ? <Nocart /> : cartList}
      </div>
    </>
  );
}
