import type { NextPage } from 'next';

interface Props {
  fontBigger?: boolean;
}

const Logo: NextPage<Props> = ({ fontBigger = false }) => {
  const textSize = fontBigger ? 'text-2xl' : 'text-lg';

  return <h1 className={`font-bold ${textSize}`}>CoffeeStyle.</h1>;
};

export default Logo;
