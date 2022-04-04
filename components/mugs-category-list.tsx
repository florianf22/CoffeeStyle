import { NextPage } from 'next';

const CATEGORIES = [
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

const MugsCategoryList: NextPage = () => {
  return (
    <ul className="px-[5%] flex flex-col gap-3">
      {CATEGORIES.map(category => (
        <li
          key={category.name}
          className="w-full text-primary border-primary border-[1px] text-center py-1
            border-opacity-40
          "
        >
          {category.label}
        </li>
      ))}
    </ul>
  );
};

export default MugsCategoryList;
