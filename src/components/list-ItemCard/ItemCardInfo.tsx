'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import cartIcon from '@/assets/icons/cart.svg';
import cartAdded from '@/assets/icons/addcart.svg';
import usedTag from '@/assets/icons/used-tag.svg';
import newTag from '@/assets/icons/new-tag.svg';
import filledHeart from '@/assets/icons/heart-filled.svg';
import { useItemCardContext } from '@/components/list-ItemCard/ItemCardContext';
import ItemLikeBtn from '@/components/list-ItemCard/ItemLikeBtn';
import ItemNumInput from '@/components/list-ItemCard/ItemNumInput';
// 추가 import
import useCartStore from '@/zustand/cartStore';
import useUserStore from '@/zustand/userStore';
import useLoginModal from '@/zustand/areyouLogin';
import { addCart } from '@/data/actions/addCart';
import { getCart } from '@/data/functions/getCart';
import { removeCart } from '@/data/functions/removeCart';

// 날짜 포멧팅 함수
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}.${month}.${day}`;
}

export default function ItemCardInfo() {
  const { variant, productData } = useItemCardContext();
  const [quantity, setQuantity] = useState(1);

  //전역 상태 관리 추가
  const { cart, setCart, setCost } = useCartStore();
  const { user } = useUserStore();
  const { openViewModal } = useLoginModal();
  const [isLoading, setLoading] = useState(false);

  // 상품 기본값 설정
  const defaultData = {
    _id: 1,
    name: '젤다의 전설 야생의 숨결',
    price: 89900,
    extra: {
      originalPrice: 1000000,
      releaseDate: '2008-05-24',
      used: false,
      platform: 'Nintendo Switch',
      condition: '미사용 중고',
      ageGrade: '전체 이용가',
      language: '음성-영어,일본어 / 자막-한국어',
    },
    shippingFees: 4000,
    bookmarks: 240,
    quantity: 5,
  };

  const data = productData || defaultData;

  // 장바구니 상태 체크 (MainCard CardBtn과 동일 로직)
  const [isInCart, setIsInCart] = useState(
    cart.some((item) => Number(item.product._id) === Number(data._id)),
  );

  // 전역 상태 변경 시 로컬 상태 업데이트 (CartBtn과 동일)
  useEffect(() => {
    setIsInCart(cart.some((item) => Number(item.product._id) === Number(data._id)));
  }, [cart, data._id]);

  // 장바구니 추가 함수 (AddCartBtn과 동일 로직)
  const handleAddToCart = async () => {
    if (!user) {
      openViewModal();
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('product_id', `${data._id}`);
    formData.append('quantity', '1');
    formData.append('token', user.token.accessToken);

    try {
      const result = await addCart(null, formData);
      if (result?.ok === 1) {
        setCart(result.item);
        const res = await getCart(user.token.accessToken);
        if (res.ok) {
          setCost(res.cost);
        }
      }
    } catch (error) {
      console.error('장바구니 추가 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  // 장바구니 제거 함수 (RemoveCartBtn과 동일 로직)
  const handleRemoveFromCart = async () => {
    if (!user) return;

    const cartBasket = cart.find((item) => Number(item.product._id) === Number(data._id));
    if (!cartBasket?._id) return;

    setLoading(true);
    try {
      const cartId = Number(cartBasket._id);
      const res = await removeCart(user.token.accessToken, cartId);
      if (res.ok) {
        setCart(res.item);
        setCost(res.cost);
      }
    } catch (error) {
      console.error('장바구니 제거 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  // 장바구니 버튼 클릭 핸들러
  const handleCartClick = () => {
    if (isInCart) {
      handleRemoveFromCart();
    } else {
      handleAddToCart();
    }
  };

  // productData 있을시 사용, 없을시 기본값
  const releaseDate = formatDate(
    data.extra?.releaseDate || defaultData.extra.releaseDate,
  );
  const isUsed = data.extra?.used ?? defaultData.extra.used;

  // variant가 'detailed'일 경우 해당 HTML 구조 반환
  if (variant === 'detailed') {
    return (
      <>
        <article className="flex flex-col flex-1 mx-3">
          <div className="ml-2">
            <h3 className={'font-bold my-2 text-[22px] xl:text-[32px]'}>{data.name}</h3>
            <section className="mb-2" aria-labelledby="price-info">
              <span id="price-info" className="sr-only">
                가격 정보
              </span>
              <div className="text-poten-gray-2 font-bold text-xs xl:text-[28px] line-through flex justify-between w-[130px] xl:w-[225px]">
                <span>정가</span>
                {(
                  data.extra?.originalPrice || defaultData.extra.originalPrice
                ).toLocaleString()}
                원
              </div>
              <div className="font-bold flex justify-between items-center w-[152px] xl:w-[246px]">
                <span className="xl:text-[28px]">할인가</span>
                <div className="flex flex-row items-center xl:text-[28px]">
                  <span className="text-poten-nintendo xl:text-[40px]">
                    {data.price.toLocaleString()}
                  </span>
                  원
                </div>
              </div>
            </section>
          </div>

          <hr className="border-1 border-poten-gray-1 ml-[-10px] xl:ml-[-15px] mt-2 mb-3.5 xl:mt-2 xl:mb-4" />

          <div className="ml-2">
            <section className="hidden xl:flex flex-row gap-8 mb-6">
              <div className="flex flex-row items-center">
                <Image
                  src={filledHeart}
                  alt="좋아요 갯수"
                  className="w-[18px] h-[18px] mr-0.5"
                />
                <span>좋아요 {data.bookmarks || defaultData.bookmarks}개</span>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  src={cartIcon}
                  alt="남은 상품 수량"
                  className="w-[18px] h-[18px] mr-0.5"
                />
                <span>남은수량 {data.quantity || defaultData.quantity}개</span>
              </div>
            </section>

            <section aria-labelledby="product-info">
              <ul className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-x-12">
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-1">
                  <span className="text-poten-gray-2 font-bold text-sm">제품상태</span>
                  <p className="text-sm col-span-2">
                    {data.extra?.condition || defaultData.extra.condition}
                  </p>
                </li>
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-3">
                  <span className="text-poten-gray-2 font-bold text-sm">발매일</span>
                  <p className="text-sm col-span-2">{releaseDate}</p>
                </li>
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-5">
                  <span className="text-poten-gray-2 font-bold text-sm">플랫폼</span>
                  <p className="text-sm col-span-2">
                    {data.extra?.platform || defaultData.extra.platform}
                  </p>
                </li>
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-2">
                  <span className="text-poten-gray-2 font-bold text-sm">이용등급</span>
                  <p className="text-sm col-span-2">
                    {data.extra?.ageGrade || defaultData.extra.ageGrade}
                  </p>
                </li>
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-4">
                  <span className="text-poten-gray-2 font-bold text-sm">언어/원산지</span>
                  <p className="text-sm col-span-2">
                    {data.extra?.language || defaultData.extra.language}
                  </p>
                </li>
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-6">
                  <span className="text-poten-gray-2 font-bold text-sm">배송비</span>
                  <p className="text-sm col-span-2">
                    일반{' '}
                    {(data.shippingFees || defaultData.shippingFees).toLocaleString()}원
                  </p>
                </li>
              </ul>
            </section>
          </div>

          <div className="hidden xl:grid h-full rounded-md border-1 border-poten-gray-1 bg-white xl:col-span-2">
            <ItemNumInput value={quantity} onChange={setQuantity} />
          </div>
        </article>

        <div className="rounded-md mt-4 md:mt-4 xl:hidden h-full border-1 border-poten-gray-1 bg-white md:col-span-2 xl:col-span-2">
          <ItemNumInput value={quantity} onChange={setQuantity} />
        </div>
      </>
    );
  }

  // 기본 variant 'default' HTML 구조
  return (
    <article className="py-1 leading-[150%] flex flex-col justify-start flex-1">
      <div className="flex flex-col p-0.5 md:p-2">
        <header className="flex flex-row gap-2 md:gap-4 items-center text-[10px] md:text-sm xl:text-base">
          <span className="items-center flex flex-row gap-0.5 font-bold italic text-poten-usedorange">
            <Image
              src={isUsed ? usedTag : newTag}
              alt={isUsed ? '중고 상품' : '신상품'}
              className="w-4 h-4"
            />
            {isUsed ? 'S급 중고' : '특급신상'}
          </span>
          <time
            dateTime={data.extra?.releaseDate || defaultData.extra.releaseDate}
            className="text-poten-gray-2">
            발매 {releaseDate}
          </time>
        </header>

        <Link href={`/list/${data._id}`}>
          <h3
            className={
              'font-extrabold my-[2px] md:my-[8px] text-lg md:text-xl xl:text-[22px] text-poten-black line-clamp-1'
            }>
            {data.name}
          </h3>
        </Link>

        <section
          className="tracking-tight leading-[120%] md:leading-[150%]"
          aria-labelledby="price-info">
          <span id="price-info" className="sr-only">
            가격 정보
          </span>
          <p className="font-bold text-poten-gray-2 text-[14px] xl:text-base line-through">
            <span className="sr-only">정가</span>
            {(
              data.extra?.originalPrice || defaultData.extra.originalPrice
            ).toLocaleString()}
            원
          </p>
          <p className="font-extrabold text-[18px] md:text-[22px] xl:text-[24px] text-poten-red">
            <span className="sr-only">할인가</span>
            {data.price.toLocaleString()}원
          </p>
        </section>
      </div>

      <footer className="mt-[16px] w-full flex flex-row items-center justify-between gap-4">
        {/* MainCard의 CardBtn과 동일 로직 적용  */}
        <button
          onClick={handleCartClick}
          disabled={isLoading}
          className={`items-center flex flex-row place-content-center flex-1 h-[30px] rounded-sm gap-1 border-1
            ${!isInCart ? 'border-poten-gray-2' : ''}
            ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
          `}>
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-t-transparent border-current rounded-full animate-spin"></div>
          ) : (
            <>
              <span
                className={`text-sm md:text-base ${!isInCart ? 'text-poten-gray-2' : ''}`}>
                {isInCart ? '장바구니' : '담기'}
              </span>
              <Image
                src={isInCart ? cartAdded : cartIcon}
                alt={isInCart ? '장바구니에서 제거' : '장바구니에 추가'}
                className="w-5 h-5"
                style={
                  !isInCart
                    ? {
                        filter:
                          'brightness(0) saturate(100%) invert(69%) sepia(6%) saturate(365%) hue-rotate(181deg) brightness(92%) contrast(86%)',
                      }
                    : {}
                }
              />
            </>
          )}
        </button>

        <ItemLikeBtn className="w-[30px] h-[30px]" />
      </footer>
    </article>
  );
}
