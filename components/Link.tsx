import type { NextPage } from 'next';

const MAIN_LINK_STYLES =
  'text-primary opacity-90 border-b-2 border-primary pb-1 border-opacity-50 hover:border-opacity-100 hover:opacity-100';
const FOOTER_LINK_STYLES = 'text-gray-500 text-sm hover:text-primary';

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  footerLink?: boolean;
}

const Link: NextPage<Props> = ({
  children,
  className,
  footerLink = false,
  ...props
}) => {
  const variant = footerLink ? FOOTER_LINK_STYLES : MAIN_LINK_STYLES;

  return (
    <a
      {...props}
      className={`${variant} cursor-pointer transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
