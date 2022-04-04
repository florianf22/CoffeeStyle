import { NextPage } from 'next';
import { MouseEvent } from 'react';

const CATEGORIES = [
  {
    label: 'ALL PRODUCTS',
    name: 'all',
  },
  {
    label: 'COFFEE MUGS',
    name: 'coffee',
  },
  {
    label: 'OTHERS',
    name: 'others',
  },
  {
    label: 'PREMIUM',
    name: 'premium',
  },
  {
    label: 'TEA MUGS',
    name: 'tea',
  },
];

interface Props {
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
}
const MugsCategoryList: NextPage<Props> = ({
  selectedCategory,
  handleCategoryChange,
}) => {
  const handleCategoryClick = (e: any): void => {
    const label = e.target.innerHTML;

    const category = CATEGORIES.find(c => c.label === label)?.name as string;

    handleCategoryChange(category);
  };

  return (
    <ul className="px-[5%] flex flex-col gap-3 my-8">
      {CATEGORIES.map(category => {
        const style =
          selectedCategory === category.name ? 'opacity-100' : 'opacity-70';

        return (
          <li
            key={category.name}
            value={category.name}
            className={`w-full text-primary border-primary border-[1px] text-center
              py-[0.4rem] border-opacity-40 cursor-pointer ${style} hover:opacity-100
              transition-opacity text-sm`}
            onClick={handleCategoryClick}
          >
            {category.label}
          </li>
        );
      })}
    </ul>
  );
};

export default MugsCategoryList;
