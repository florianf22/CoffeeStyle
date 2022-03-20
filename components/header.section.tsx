import type { NextPage } from 'next';
import HeaderHero from './header-hero';
import Nav from './nav';

const Header: NextPage = () => {
  return (
    <header>
      <Nav />
      <HeaderHero />
    </header>
  );
};

export default Header;
