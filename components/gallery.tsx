import type { NextPage } from 'next';
import Image from 'next/image';

const imgUrlsLocal = [
  'https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a2f3decdfa9_Image.jpg',
  'https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7aa6d0ecdfa7_Image%202.jpg',
  'https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a528fecdfa6_Image.jpg',
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
