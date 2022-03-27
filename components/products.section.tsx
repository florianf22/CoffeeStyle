import { Mug } from '@prisma/client';
import type { NextPage } from 'next';
import * as React from 'react';
import Product from './product';
import SectionLabel from './section-label';

interface Props {
  mugs: Mug[];
  moreMugs?: boolean;
}

const Products: NextPage<Props> = ({ mugs, moreMugs = false }) => {
  return (
    <section className="text-center mb-24">
      <SectionLabel className="mb-8">
        {moreMugs ? 'MORE PRODUCTS' : 'FEATURED PRODUCTS'}
      </SectionLabel>

      {mugs && mugs.map(mug => <Product key={mug.id} mug={mug} />)}
    </section>
  );
};

export default Products;
