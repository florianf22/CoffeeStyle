import { Mug } from '@prisma/client';
import type { NextPage } from 'next';
import * as React from 'react';
import Product from './product';
import SectionLabel from './section-label';

interface Props extends React.HTMLProps<HTMLDivElement> {
  mugs: Mug[];
  title?: string;
  biggerImgSize?: boolean;
}

const Products: NextPage<Props> = ({
  mugs,
  title,
  className,
  biggerImgSize = false,
  ...props
}) => {
  const imgWidth = biggerImgSize ? 'w-[90vw]' : 'w-[55vw]';

  return (
    <section {...props} className={`text-center mb-24 ${className}`}>
      {title && <SectionLabel className="mb-8">{title}</SectionLabel>}

      {mugs &&
        mugs.map(mug => <Product key={mug.id} mug={mug} imgWidth={imgWidth} />)}
    </section>
  );
};

export default Products;
