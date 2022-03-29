import type { Blog as BlogType } from '@prisma/client';
import type { NextPage } from 'next';
import Button from './button';
import Input from './input';
import SectionLabel from './section-label';

const Newsletter: NextPage = () => {
  return (
    <section className="mt-24 text-center bg-black text-white py-16 px-4">
      <SectionLabel className="max-w-[30ch] mt-4">
        SIGN UP AND GET FREE COFFEE BAGS
      </SectionLabel>

      <h2 className="mt-8 text-3xl">Coffee Updates</h2>

      <form className="flex flex-col gap-4 mt-8 px-6">
        <Input type="text" placeholder="CUSTOMER@COFFEESTYLE.COM" />
        <Button primary className="">
          SUBSCRIBE
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;
