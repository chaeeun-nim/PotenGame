import { IcartCost, IcartItem } from '@/types/Cart';

export default function PaymentBar({
  cost,
  items,
}: {
  cost: IcartCost;
  items: IcartItem[];
}) {
  const countItem = items.reduce((sum, next) => sum + next.quantity, 0);

  class Order {
    _id: number;
    quantity: number;

    constructor(_id: number, quantity: number) {
      this._id = _id;
      this.quantity = quantity;
    }
  }

  const orderList = items.map((item) => new Order(item._id, item.quantity));

  return (
    <>
      <div className="fixed w-full h-[72px] bg-black rounded-t-lg bottom-0 z-[999999999] flex justify-center items-center">
        <form action="directPayment">
          <input type="hidden" name="orderData" value={JSON.stringify(orderList)} />
          <button
            type="submit"
            className="flex items-center justify-center font-bold text-[18px] rounded-[50px] text-white bg-poten-red py-2 px-10">
            {cost.products?.toLocaleString()}원 결제하기
            <div className="text-poten-red bg-white text-center p-1 w-8 h-8 rounded-4xl text-[16px] ml-2">
              {countItem}
            </div>
          </button>
        </form>
      </div>
    </>
  );
}
