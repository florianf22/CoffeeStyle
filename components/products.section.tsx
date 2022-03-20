import { Mug } from '@prisma/client';
import type { NextPage } from 'next';
import Product from './Product';
import SectionLabel from './section-lable';

interface Props {
  mugs: Mug[];
}

const Products: NextPage<Props> = ({ mugs }) => {
  return (
    <section className="text-center mb-24">
      <SectionLabel className="mb-8">FEATURED MUGS</SectionLabel>

      {mugs.map(mug => (
        <Product key={mug.id} mug={mug} />
      ))}

      <SectionLabel className="my-8">MORE PRODUCTS</SectionLabel>
    </section>
  );
};

export default Products;
