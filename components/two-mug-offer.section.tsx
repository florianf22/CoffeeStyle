import type { NextPage } from 'next';
import Gallery from './gallery';
import SectionLabel from './section-label';

interface Props {}

const TwoMugOffer: NextPage<Props> = ({}) => {
  return (
    <section className="text-center">
      <SectionLabel className="max-w-[35ch]">
        BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE
      </SectionLabel>

      <Gallery />
    </section>
  );
};

export default TwoMugOffer;
