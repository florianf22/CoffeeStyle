import type { NextPage } from 'next';
import LinkCustom from './link';

const AboutOverview: NextPage = () => {
  return (
    <section className="my-24 w-[80%] mx-auto text-center">
      <h2 className="text-3xl mb-5">
        Even the all-powerful Pointing has no control about the blind texts.
      </h2>

      <p className="text-gray-600 opacity-70 text-base mb-5">
        It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the
        blind texts it is an almost unorthographic life One day however a small
        line of blind text by the name of Lorem Ipsum decided to leave for the
        far World of Grammar.
      </p>

      <LinkCustom>Read the full Story</LinkCustom>
    </section>
  );
};

export default AboutOverview;
