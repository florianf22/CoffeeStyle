import type { NextPage } from 'next';

interface Props extends React.HTMLProps<HTMLInputElement> {}

const Input: NextPage<Props> = ({ className, children, ...props }) => {
  return (
    <input
      {...props}
      className={`px-2 py-4 bg-transparent border-[1px] border-opacity-50
        outline-none text-center text-sm uppercase ${className}`}
    >
      {children}
    </input>
  );
};

export default Input;
