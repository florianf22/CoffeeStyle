import type { NextPage } from 'next';
import { FiAlignRight } from 'react-icons/fi';
import CartLogo from './cart-logo';
import Logo from './logo';

const Nav: NextPage = () => {
  return (
    <nav className="py-6 flex items-center px-[10%] justify-between">
      <Logo />
      <CartLogo cartItemsCount={3} />
      <FiAlignRight className="h-[24px] w-[24px] text-gray-600" />
    </nav>
  );
};

export default Nav;
