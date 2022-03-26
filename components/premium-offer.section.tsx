import type { NextPage } from 'next';
import Button from './button';
import SectionLabel from './section-label';

const PremiumOffer: NextPage<{}> = () => {
  return (
    <section className="text-center my-24">
      <SectionLabel className="max-w-[35ch]">PREMIUM OFFER</SectionLabel>

      <div className="mt-16">
        <h2 className="text-4xl">Get our Coffee Magazine</h2>

        <p className="mt-8 text-gray-500">
          The most versatile furniture system ever created. Designed to fit your
          life.
        </p>

        <Button secondary className="font-medium mt-8">
          START SHOPPING
        </Button>
      </div>
    </section>
  );
};

export default PremiumOffer;
