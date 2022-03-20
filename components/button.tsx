import type { NextPage } from 'next';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: NextPage<Props> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-white text-black py-4 px-6 tracking-wider font-bold text-sm
        transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
