import type { NextPage } from 'next';

type ButtonHTMLProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type PrimaryButtonProps = {
  primary: boolean;
  secondary?: never;
};

type SecondaryButtonProps = {
  primary?: never;
  secondary: boolean;
};

const Button: NextPage<
  ButtonHTMLProps & (PrimaryButtonProps | SecondaryButtonProps)
> = ({ children, className, primary, secondary, ...props }) => {
  const variant = secondary
    ? 'bg-black text-white text-xs tracking-[2px]'
    : 'bg-white text-black text-sm tracking-wider';

  return (
    <button
      {...props}
      className={`py-4 px-6 transition-opacity hover:opacity-90 ${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
