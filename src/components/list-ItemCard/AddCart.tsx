import { addCart } from '@/data/actions/addCart';
import useCartStore from '@/zustand/cartStore';
import { useActionState, useEffect } from 'react';

import { getCart } from '@/data/functions/getCart';
import useUserStore from '@/zustand/userStore';
import useLoginModal from '@/zustand/areyouLogin';

export default function AddCart({
  ItemId,
  quantity,
  openCartGoModal,
}: {
  ItemId: number;
  quantity: number;
  openCartGoModal: () => void;
}) {
  const { setCart, setCost } = useCartStore();
  const [state, formAction] = useActionState(addCart, null);
  const { user } = useUserStore();
  const realQuantity = quantity;
  const { openViewModal } = useLoginModal();

  // 서버액션이 종료되면, 종료 이후 받은 데이터를 전역상태에 저장
  useEffect(() => {
    if (state?.ok === 1) {
      setCart(state.item);
      (async () => {
        const res = await getCart(user?.token.accessToken as string);
        if (res.ok) {
          setCost(res.cost);
        }
      })();
    }
  }, [state]); // eslinkt 경고는 무시하셔도됩니다
  // 전역 상태가 변경되었음으로, 그에 따른 버튼의 상태변화로 연결

  const handleAddToCart = () => {
    if (!user) {
      openViewModal();
    } else {
      openCartGoModal();
    }
  };

  return (
    <>
      <form action={formAction}>
        {/* 제품의 ID값을 전달하기 위한 숨겨진 input */}
        <input type="number" name="product_id" hidden defaultValue={ItemId} />
        {/* 제품의 갯수 전달하기 위한 숨겨진 input */}
        <input type="number" name="quantity" hidden value={realQuantity} readOnly />
        <input
          type="string"
          name="token"
          hidden
          defaultValue={user?.token.accessToken as string}
        />
        <button
          onClick={handleAddToCart}
          type="submit"
          className="bg-poten-red text-white rounded-md font-bold flex justify-center items-center w-[160px] h-[35px] md:w-[183px] md:h-[47px] xl:w-[174px] xl:h-[47px] hover:bg-red-600 transition-colors">
          장바구니에 추가
        </button>
      </form>
    </>
  );
}
