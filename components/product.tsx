import * as React from 'react';
import { Mug } from '@prisma/client';
import type { NextPage } from 'next';
import Image from 'next/image';
import useIntersection from '../hooks/useIntersection';
import Link from 'next/link';
import ProductPrice from './product-price';

type ImgWidth = `w-[${number}vw]`;
type HeadingSize = `text-[${number}rem]`;

interface Props extends React.HTMLProps<HTMLDivElement> {
  mug: Mug;
  imgWidth?: ImgWidth;
  headingSize?: HeadingSize;
  hidePrice?: boolean;
}

const Product: NextPage<Props> = ({
  mug,
  imgWidth = 'w-[55vw]',
  headingSize = 'text-xl',
  hidePrice = false,
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const inViewport = useIntersection(ref, '0px');

  return (
    <div
      {...props}
      className={`
        my-8 grid place-items-center opacity-0 translate-y-24 transition-all
         ${
           inViewport ? 'opacity-100 translate-y-0' : ''
         } duration-500 ${className}`}
      ref={ref}
    >
      <Link href={`/product/${mug.slug}`} passHref>
        <div className={`relative ${imgWidth} h-[45vh] cursor-pointer`}>
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
      </Link>

      <Link href={`/product/${mug.slug}`} passHref>
        <h3 className={`${headingSize} mb-2 mt-4 cursor-pointer`}>
          {mug.name}
        </h3>
      </Link>

      {!hidePrice && (
        <ProductPrice
          onSale={mug.onSale}
          price={mug.price}
          oldPrice={mug.oldPrice}
        />
      )}
    </div>
  );
};

export default Product;
