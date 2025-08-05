// src/stores/useCartStore.ts
import { IcartCost, IcartItem, ICartProductItem } from '@/types/Cart';
import { Iproduct } from '@/types/products';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
  cart: IcartItem[];
  cost: IcartCost;
  setCart: (dataItems: IcartItem[]) => void;
  setCost: (IcartCost: IcartCost) => void;
  addToCart: (product: Iproduct, quantity: number) => void;
  removeFromCart: (productId: string | number) => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
  clearCart: () => void;
  calculateCost: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  resetCartStore: () => void;
};

// Iproduct를 IcartItem으로 변환하는 헬퍼 함수
const convertToCartItem = (product: Iproduct, quantity: number): IcartItem => {
  return {
    _id: Date.now(), // 고유한 cart item ID 생성
    user_id: 0, // 실제 사용 시 현재 사용자 ID로 설정
    product_id: product._id, // 상품 ID 매핑
    quantity: quantity,
    product: {
      _id: product._id,
      name: product.name,
      price: product.price,
      seller_id: product.seller_id || 0,
      quantity: product.quantity || 0,
      buyQuantity: product.buyQuantity || 0,
      active: product.active ?? true,
      shippingFees: product.shippingFees || 0,
      extra: product.extra,
      bookmarks: product.bookmarks || 0,
      // mainImages 배열의 첫 번째 이미지를 image로 변환
      image:
        product.mainImages && product.mainImages.length > 0
          ? {
              path: product.mainImages[0].path,
              name: product.mainImages[0].name,
              originalname: product.mainImages[0].originalname,
            }
          : undefined,
    } as ICartProductItem, // 타입 단언 사용
    // 누락된 필드들 추가
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

const useCartStore = create<Store>()(
  persist(
    (set, get) => ({
      cart: [],
      cost: {
        products: 0,
        shippingFees: 0,
        discount: { products: 0, shippingFees: 0 },
        total: 0,
      },

      setCart: (dataItems: IcartItem[]) => {
        set({ cart: dataItems });
        get().calculateCost();
      },

      setCost: (IcartCost: IcartCost) => {
        set({ cost: IcartCost });
      },

      addToCart: (product: Iproduct, quantity: number) => {
        const { cart } = get();
        const existingItemIndex = cart.findIndex(
          (item) => item.product_id === product._id,
        );

        let updatedCart: IcartItem[];

        if (existingItemIndex !== -1) {
          // 이미 장바구니에 있는 상품이면 수량 업데이트
          updatedCart = cart.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        } else {
          // 새로운 상품 추가
          const newCartItem = convertToCartItem(product, quantity);
          updatedCart = [...cart, newCartItem];
        }

        set({ cart: updatedCart });
        get().calculateCost();
      },

      removeFromCart: (productId: string | number) => {
        const { cart } = get();
        const updatedCart = cart.filter((item) => item._id !== productId);
        set({ cart: updatedCart });
        get().calculateCost();
      },

      updateQuantity: (productId: string | number, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }

        const { cart } = get();
        const updatedCart = cart.map((item) =>
          item._id === productId ? { ...item, quantity } : item,
        );

        set({ cart: updatedCart });
        get().calculateCost();
      },

      clearCart: () => {
        set({ cart: [] });
        get().calculateCost();
      },

      calculateCost: () => {
        const { cart } = get();

        let productsTotal = 0;
        let shippingFeesTotal = 0;

        cart.forEach((item) => {
          // 상품 총액 계산
          productsTotal += item.product.price * item.quantity;

          // 배송비 계산 (5개 이상이면 무료배송, 아니면 4000원)
          if (item.quantity < 5) {
            shippingFeesTotal += item.product.shippingFees || 4000;
          }
        });

        // 할인 계산 (필요에 따라 구현)
        const discount = {
          products: 0,
          shippingFees: 0,
        };

        const total =
          productsTotal + shippingFeesTotal - discount.products - discount.shippingFees;

        const newCost: IcartCost = {
          products: productsTotal,
          shippingFees: shippingFeesTotal,
          discount,
          total,
        };

        set({ cost: newCost });
      },

      getTotalPrice: () => {
        const total = get().cost.total;
        return total || 0;
      },

      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },

      resetCartStore: () => {
        set({ cart: [] });
        set({
          cost: {
            products: 0,
            shippingFees: 0,
            discount: { products: 0, shippingFees: 0 },
            total: 0,
          },
        });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useCartStore;
