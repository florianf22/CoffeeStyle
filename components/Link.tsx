import type { NextPage } from 'next';

interface Props extends React.HTMLProps<HTMLAnchorElement> {}

const Link: NextPage<Props> = ({ children, className, ...props }) => {
  return (
    <a
      {...props}
      className={`text-primary opacity-90 border-b-2 border-primary pb-1 cursor-pointer
        border-opacity-50 hover:border-opacity-100 hover:opacity-100
        transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
