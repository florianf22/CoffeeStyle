import type { NextPage } from 'next';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';

const CartLogo: NextPage = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <FiShoppingCart className="h-[18px] w-[18px] text-gray-600" />
      <small className="text-gray-600 translate-y-[1px]">CART</small>
    </div>
  );
};

export default CartLogo;
