import type { NextPage } from 'next';
import CartLogo from './cartLogo';
import Logo from './logo';

const Header: NextPage = () => {
  return (
    <header className="py-6 flex justify-around">
      <Logo />
      <CartLogo />
    </header>
  );
};

export default Header;
