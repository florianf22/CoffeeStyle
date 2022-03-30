import { NextPage } from 'next';
import Image from 'next/image';
import Logo from './logo';

const Banner: NextPage = () => {
  return (
    <section className="mb-24 bg-black text-white">
      <div className="w-[100vw] h-[30vh] relative">
        <Image
          src={`/images/banner.jpeg`}
          layout="fill"
          alt="banner pic"
          className="object-cover bg-center"
        />
      </div>

      <div className="py-20">
        <div className="px-[5%]">
          <div className="flex justify-center items-center gap-2">
            <span className="text-2xl">handmade by</span> <Logo fontBigger />
          </div>
          <p className="font-sm mt-4">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
