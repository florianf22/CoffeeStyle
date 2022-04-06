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
  const position = open ? 'top-full' : '-top-[396px]';

  return (
    <ul
      className={`absolute ${position} left-0 text-white w-full border-0
       h-[396px] transition-all duration-500`}
    >
      {listItems.map((item, index) => {
        const opacity =
          router.pathname === item.href ? 'opacity-100' : 'opacity-70';

        return (
          <li
            key={item.label}
            className={`bg-white text-black w-full py-6 text-center uppercase
                text-[12px] tracking-[1px] font-bold`}
          >
            <a
              href={item.href}
              className={`${opacity} hover:opacity-100 transition-opacity`}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
