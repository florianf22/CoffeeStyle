import type { NextPage } from 'next';
import { formatPrice } from '../lib/formaters';

interface Props extends React.HTMLProps<HTMLDivElement> {
  price: number;
  oldPrice: number | null;
  onSale: boolean | null;
  fontBigger?: boolean;
}

const ProductPrice: NextPage<Props> = ({
  price,
  onSale,
  oldPrice,
  fontBigger = false,
  className,
  ...props
}) => {
  const fontSize = fontBigger ? 'text-2xl' : 'text-lg';

  return (
    <div
      {...props}
      className={`flex gap-x-2 justify-center ${fontSize} ${className}`}
    >
      <p className="text-primary font-bold ">$ {formatPrice(price)}</p>

      {onSale && oldPrice && (
        <p className="text-gray-400 text-base self-end">
          <del>$ {formatPrice(oldPrice)}</del>
        </p>
      )}
    </div>
  );
};

export default ProductPrice;
