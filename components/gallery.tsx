import type { NextPage } from 'next';
import Image from 'next/image';

const imgUrlsLocal = [
  '/two-mug-offer/1.jpeg',
  '/two-mug-offer/2.jpeg',
  '/two-mug-offer/3.jpeg',
];

interface Props {
  imgUrls?: string[];
}

const Gallery: NextPage<Props> = ({ imgUrls }) => {
  return (
    <div className="grid grid-cols-2 gap-3 px-6 mt-16">
      {imgUrls
        ? null
        : imgUrlsLocal.map((url, index) => (
            <div
              key={index}
              className={`relative ${
                index === 0 ? 'h-[60vw]' : 'h-[35vw]'
              } min-w-[40vw] w-[100%] ${index === 0 ? 'col-span-full' : ''}`}
            >
              <Image
                src={url}
                alt="offer pic"
                layout="fill"
                className="object-cover bg-center"
              />
            </div>
          ))}
    </div>
  );
};

export default Gallery;
