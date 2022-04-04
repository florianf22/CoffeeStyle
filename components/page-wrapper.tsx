import type { NextPage } from 'next';
import Cart from './cart';
import Footer from './footer.section';
import Header from './header.section';
import Nav from './nav';

interface Props extends React.HTMLProps<HTMLDivElement> {
  topSection?: 'header' | 'nav';
}

const PageWrapper: NextPage<Props> = ({
  topSection = 'header',
  children,
  className,
  ...props
}) => {
  return (
    <>
      {topSection === 'header' ? (
        <Header />
      ) : (
        <header>
          <Nav />
        </header>
      )}
      <main {...props} className={`text-center px-[5%] $${className}`}>
        {children}
      </main>

      <Cart />

      <Footer />
    </>
  );
};

export default PageWrapper;
