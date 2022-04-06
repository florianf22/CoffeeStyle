import type { NextPage } from 'next';
import React from 'react';
import { FiAlignRight } from 'react-icons/fi';
import { CartContext } from '../context/cart';
import CartLogo from './cart-logo';
import Logo from './logo';
import Menu from './menu';

const Nav: NextPage = () => {
  const { itemsQuantity } = React.useContext(CartContext);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleOnIconClick = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative">
      <div
        className="pt-6 flex items-center px-[10%] justify-between
          pb-6 border-b-[1px] z-10 relative"
      >
        <Logo />
        <CartLogo cartItemsCount={itemsQuantity} />
        <FiAlignRight
          className="h-[24px] w-[24px] text-gray-600 cursor-pointer"
          onClick={handleOnIconClick}
        />

        <Menu open={menuOpen} />
      </div>
    </nav>
  );
};

export default Nav;
