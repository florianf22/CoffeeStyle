import type { NextPage } from 'next';
import Image from 'next/image';
import Button from './button';
// import heroImage from '../public/images/headerBg.jpeg';

const HeaderHero: NextPage = () => {
  return (
    <div
      className="bg-header-hero min-h-[65vh] object-contain bg-center w-[100vw]
        text-white text-center flex flex-col justify-center gap-y-8
    "
    >
      <h2 className="font-bold opacity-80">BEST PLACE TO BUY DESIGN</h2>
      <h1 className="text-5xl">Coffee Mugs</h1>
      <h3 className="w-[80%] self-center text-lg">
        The most versatile furniture system ever created. Designed to fit your
        life, made to move and grow.
      </h3>
      <Button primary className="self-center">
        EXPLORE OUR PRODUCTS
      </Button>
    </div>
  );
};

export default HeaderHero;
