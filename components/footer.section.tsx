import * as React from 'react';
import type { NextPage } from 'next';
import useIntersection from '../hooks/useIntersection';
import LinkCustom from './link';
import Logo from './logo';
import Newsletter from './newsletter.section';

const MENU_LINKS = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/products',
    label: 'Our Products',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/styleguide',
    label: 'Styleguide',
  },
];
const FOLLOW_US_LINKS = [
  {
    href: 'https://www.facebook.com',
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
  },
  {
    href: 'https://www.pinterest.com',
    label: 'Pinterest',
  },
];

const Footer: NextPage = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const inViewport = useIntersection(ref, '0px');

  return (
    <footer className="mt-24 text-center">
      <Newsletter />

      <div
        className={`mt-24 opacity-0 translate-y-24 transition-all duration-500
        ${inViewport ? 'opacity-100 translate-y-0' : ''}`}
        ref={ref}
      >
        <Logo />

        <p className="mt-8 text-gray-600 max-w-[37ch] mx-auto">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </p>

        <p className="mt-8 text-gray-400 text-sm">CoffeeStyle Inc. © 1996</p>
      </div>

      <div className="mt-16 flex flex-col gap-2">
        <h3 className="text-gray-700 text-sm text-bold mb-3 tracking-[1px]">
          MENU
        </h3>

        {MENU_LINKS.map(link => (
          <LinkCustom footerLink key={link.label} href={link.href}>
            {link.label}
          </LinkCustom>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-2">
        <h3 className="text-gray-700 text-sm text-bold mb-3 tracking-[1px]">
          FOLLOW US
        </h3>

        {FOLLOW_US_LINKS.map(link => (
          <LinkCustom footerLink key={link.label} href={link.href}>
            {link.label}
          </LinkCustom>
        ))}
      </div>

      <div className="my-16">
        <h3 className="text-gray-700 text-sm text-bold mb-3 tracking-[1px]">
          CONTACT US
        </h3>

        <p className="mt-5 mb-4 text-sm text-gray-500">
          We’re Always Happy to Help
        </p>
        <LinkCustom
          footerLink
          href="mailto:us@coffeestyle.io"
          className="text-[1.25rem]"
        >
          us@coffeestyle.io
        </LinkCustom>
      </div>
    </footer>
  );
};

export default Footer;
