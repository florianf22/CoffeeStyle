import type { NextPage } from 'next';
import { FiShoppingCart } from 'react-icons/fi';

type Props = {
  cartItemsCount: number;
};

const CartLogo: NextPage<Props> = ({ cartItemsCount }) => {
  return (
    <div className="flex justify-center items-center gap-2 translate-x-[-18px]">
      <FiShoppingCart className="h-[18px] w-[18px] text-gray-600" />
      <div className="text-gray-600 translate-y-[1px] relative text-sm">
        CART
        <span
          className="absolute h-[18px] w-[18px] bg-gray-600 top-[50%] right-[-1.35rem]
          rounded-full text-white flex items-center justify-center
          translate-y-[-50%] text-[13px]"
        >
          {cartItemsCount}
        </span>
      </div>
    </div>
  );
};

export default CartLogo;
