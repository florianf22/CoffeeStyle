import { NextPage } from 'next';

interface Props extends React.HTMLProps<HTMLDivElement> {
  active?: boolean;
}

const Dot: NextPage<Props> = ({ className, active = false, ...props }) => {
  const bg = active ? 'bg-gray-500' : 'bg-gray-300';

  return (
    <div
      {...props}
      className={`h-[10px] w-[10px] rounded-full cursor-pointer ${bg} ${className}`}
    />
  );
};

export default Dot;
