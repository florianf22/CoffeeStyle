import type { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  fontBigger?: boolean;
}

const Logo: NextPage<Props> = ({ fontBigger = false }) => {
  const textSize = fontBigger ? 'text-2xl' : 'text-lg';

  return (
    <Link href="/" passHref>
      <h1 className={`font-bold ${textSize} cursor-pointer`}>CoffeeStyle.</h1>
    </Link>
  );
};

export default Logo;
