import type { NextPage } from 'next';
import Image from 'next/image';
import * as React from 'react';
import { CartContext } from '../context/cart';
import { formatPrice } from '../lib/formaters';
import { CartItem } from '../types';
import Button from './button';

interface Props {
  item: CartItem;
}

const CartItem: NextPage<Props> = ({ item }) => {
  const { dispatch, items } = React.useContext(CartContext);

  const removeItem = (): void => {
    dispatch({ type: 'REMOVE_ITEM', payload: item.name });

    if (items.length === 1) {
      dispatch({ type: 'TOGGLE_VISIBILITY' });
    }
  };

  return (
    <div className="flex text-white items-center gap-10 mt-8">
      <div className="relative w-[90px] h-[90px] self-start translate-y-[6px]">
        <Image
          src={item.imgUrl}
          layout="fill"
          alt={item.name}
          className="object-cover bg-center"
        />
      </div>

      <div className="max-w-[5rem]">
        <h2>{item.name}</h2>
        <h3 className="text-sm mt-2">$ {formatPrice(item.price)} USD</h3>
        <Button
          secondary
          className="px-0 py-0 pt-3 text-gray-400 hover:text-white"
          onClick={removeItem}
        >
          REMOVE
        </Button>
      </div>

      <div className="text-base border-[1px] py-1 px-6 border-gray-700 -translate-y-3">
        {item.quantity}
      </div>
    </div>
  );
};

export default CartItem;
