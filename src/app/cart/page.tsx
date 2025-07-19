import { getCart } from '@/data/functions/getCart';

export default async function CartPage() {
  const data = await getCart();
  console.log(data);
  return (
    <>
      {data.ok ? (
        data.item.map((item) => {
          return <p key={item._id}>{item.product.name}</p>;
        })
      ) : (
        <p>로그인하시오 ㅋ</p>
      )}
    </>
  );
}
