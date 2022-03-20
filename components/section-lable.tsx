import type { NextPage } from 'next';

interface Props extends React.HTMLProps<HTMLHeadingElement> {}

const SectionLabel: NextPage<Props> = ({ children, className, ...props }) => {
  return (
    <h4
      {...props}
      className={`opacity-60 font-bold text-[0.75rem] tracking-widest
        relative inline-block
        before:h-[1px] before:w-8 before:bg-gray-400 before:absolute
        before:top-[50%] before:left-[-3rem] 
        after:h-[1px] after:w-8 after:bg-gray-400 after:absolute
        after:top-[50%] after:right-[-2.8rem] 
      ${className}`}
    >
      {children}
    </h4>
  );
};

export default SectionLabel;
