import { NextPage } from 'next';
import Image from 'next/image';
import Logo from './logo';
import { FiGlobe, FiKey } from 'react-icons/fi';

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

        <div className="pt-10 flex flex-col items-center gap-2 px-[5%]">
          <FiGlobe className="h-6 w-6 " />
          <h4 className="font-medium text-sm tracking-[1px]">
            Premium Quality
          </h4>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in.
          </p>
        </div>

        <div className="pt-10 flex flex-col items-center gap-2 px-[5%]">
          <FiKey className="h-6 w-6 " />
          <h4 className="font-medium text-sm tracking-[1px]">
            Gentle to the Environment
          </h4>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
