import * as React from 'react';
import { Mug } from '@prisma/client';
import type { NextPage } from 'next';
import Image from 'next/image';
import { formatPrice } from '../lib/formaters/formatPrice';
import useIntersection from '../hooks/useIntersection';

interface Props {
  mug: Mug;
}

const Product: NextPage<Props> = ({ mug }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const inViewport = useIntersection(ref, '0px');

  return (
    <div
      key={mug.id}
      className={`
        my-8 grid place-items-center opacity-0 translate-y-24 transition-al
         ${inViewport ? 'opacity-100 translate-y-0' : ''} duration-500
    `}
      ref={ref}
    >
      <div className="relative w-[55vw] h-[45vh]">
        {mug.onSale && (
          <span
            className="bg-white text-primary px-3 py-2 absolute
            top-3 right-2 z-10 font-bold
        "
          >
            On Sale.
          </span>
        )}
        <Image
          src={mug.imgUrl}
          alt={mug.name}
          layout="fill"
          className="object-cover bg-center"
        />
      </div>
      <h3 className="text-xl mb-2 mt-4">{mug.name}</h3>
      <div className="flex gap-x-2">
        <p className="text-primary font-bold text-base">
          $ {formatPrice(mug.price)}
        </p>
        {mug.onSale && (
          <p className="text-gray-400 text-base">
            <del>$ {formatPrice(mug.price * 1.5)}</del>
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
