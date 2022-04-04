import { NextPage } from 'next';
import { useRouter } from 'next/router';

const listItems = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'our products',
    href: '/products',
  },
  {
    label: 'blog',
    href: '/blog',
  },
  {
    label: 'about',
    href: '/about',
  },
  {
    label: 'contact',
    href: '/contact',
  },
  {
    label: 'styleguide',
    href: '/styleguide',
  },
];

interface Props {
  open: boolean;
}

const Menu: NextPage<Props> = ({ open }) => {
  const router = useRouter();
  const height = open ? 'h-[300px]' : 'h-0';

  return (
    <ul
      className={`absolute top-full left-0 text-white w-full z-20 border-0
        ${height} overflow-hidden bg-slate-600`}
    >
      {listItems.map((item, index) => {
        const font = router.pathname === item.href ? 'font-bold' : '';

        return (
          <li
            key={item.label}
            className={`bg-white text-black w-full py-4 text-center uppercase text-[12px]
                tracking-[1px] ${font} transition-all`}
          >
            <a href={item.href} className="">
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
