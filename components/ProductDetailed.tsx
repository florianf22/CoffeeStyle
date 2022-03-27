import { Mug } from '@prisma/client';
import type { NextPage } from 'next';
import Product from './product';
import ProductPrice from './product-price';

interface Props {
  mug: Mug;
}

const ProductDetailed: NextPage<Props> = ({ mug }) => {
  return (
    <div className="text-center mt-20">
      <Product
        mug={mug}
        imgWidth="w-[90vw]"
        headingSize="text-[2.4rem]"
        hidePrice
      />

      <p className="max-w-[35ch] mx-auto text-gray-500 mt-[-1rem] mb-6">
        A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque
        sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae
        labore.
      </p>

      <ProductPrice
        onSale={mug.onSale}
        price={mug.price}
        oldPrice={mug.oldPrice}
        fontBigger
      />
    </div>
  );
};

export default ProductDetailed;
