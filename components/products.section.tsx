import { Mug } from '@prisma/client';
import type { NextPage } from 'next';
import * as React from 'react';
import { MugsContext } from '../context/mugs';
import Loader from './loader';
import Product from './product';
import SectionLabel from './section-label';
import ShowIfNotError from './show-if-not-error';

type PrimaryProductsProps = {
  type?: never;
  mugs: Mug[];
};

type SecondaryProductsProps = {
  type: 'more';
  mugs?: never;
};

const Products: NextPage<PrimaryProductsProps | SecondaryProductsProps> = ({
  mugs,
  type,
}) => {
  const {
    actions,
    mugs: mugsContext,
    loading,
    error,
  } = React.useContext(MugsContext);

  React.useEffect(() => {
    if (type === 'more') {
      actions.fetchNotFeaturedMugs();
    }
  }, [actions, type]);

  const renderClientMugs = (): JSX.Element => {
    if (loading) {
      return <Loader />;
    }

    return (
      <ShowIfNotError error={error}>
        {type === 'more' &&
          mugsContext
            .filter(mug => !mug.featured)
            .map(mug => <Product key={mug.id} mug={mug} />)}
      </ShowIfNotError>
    );
  };

  return (
    <section className="text-center mb-24">
      <SectionLabel className="mb-8">
        {type ? 'MORE PRODUCTS' : 'FEATURED PRODUCTS'}
      </SectionLabel>

      {mugs && mugs.map(mug => <Product key={mug.id} mug={mug} />)}

      {!mugs && renderClientMugs()}
    </section>
  );
};

export default Products;
