import type { NextPage } from 'next';

interface Props {
  error: string;
}

const ShowIfNotError: NextPage<Props> = ({ error, children }) => {
  return (
    <>
      {error ? (
        <div className="flex justify-center">
          <h3 className="max-w-[18ch] text-red-500 font-bold text-lg">
            {error}
          </h3>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default ShowIfNotError;
