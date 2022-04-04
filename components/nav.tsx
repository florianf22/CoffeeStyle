import type { NextPage } from 'next';
import React from 'react';
import { FiAlignRight } from 'react-icons/fi';
import { CartContext } from '../context/cart';
import CartLogo from './cart-logo';
import Logo from './logo';

const Nav: NextPage = () => {
  const { itemsQuantity } = React.useContext(CartContext);

  return (
    <nav className="py-6 flex items-center px-[10%] justify-between">
      <Logo />
      <CartLogo cartItemsCount={itemsQuantity} />
      <FiAlignRight className="h-[24px] w-[24px] text-gray-600" />
    </nav>
  );
};

export default Nav;
