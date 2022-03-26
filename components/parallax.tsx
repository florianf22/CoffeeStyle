import type { NextPage } from 'next';

const URL =
  'https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7ac1c6ecdfd2_Section%20Image%202.jpg';

interface Props {
  url?: string;
}

const Parallax: NextPage<Props> = ({ url = URL }) => {
  return (
    <div
      className={`h-[340px] bg-parallax bg-center bg-cover bg-fixed bg-no-repeat`}
    />
  );
};

export default Parallax;
