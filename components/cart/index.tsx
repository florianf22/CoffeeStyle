import * as React from 'react';
import type { NextPage } from 'next';
import { CartContext } from '../../context/cart';
import ClientPortal from '../client-portal';
import clsx from 'classnames';
import { FiX } from 'react-icons/fi';
import CartItem from '../cart-item';
import Button from '../button';
import styles from './cart.module.css';
import { formatPrice } from '../../lib/formaters';

const Cart: NextPage = () => {
  const { isVisible, items, total, dispatch } = React.useContext(CartContext);

  const toggleCartVisibility = () => {
    dispatch({ type: 'TOGGLE_VISIBILITY' });
  };

  const visibleStyles = isVisible
    ? 'translate-x-0 opacity-100'
    : 'opacity-50 translate-x-[100%]';

  return (
    <ClientPortal selector="#cart">
      <div
        className={`fixed top-0 left-0 bg-black w-[100vw] h-[100vh]
        z-10 transition-all duration-300 ${visibleStyles}`}
      >
        <div
          className="border-b border-gray-700 py-10 px-10 flex justify-between
          h-16 items-center"
        >
          <h3 className="text-gray-300 tracking-[1px] text-sm">YOUR CART</h3>

          <FiX
            className="text-gray-300 h-5 w-5"
            onClick={toggleCartVisibility}
          />
        </div>

        <div
          className={clsx(
            'mx-[10%] mt-8 h-[calc(100vh-20rem)] overflow-y-scroll',
            styles.scrollbar,
          )}
        >
          {items.map(item => (
            <CartItem key={item.name} item={item} />
          ))}
        </div>

        <div className="border-t border-gray-700 h-40 py-10 absolute w-[100%] px-[10%] bottom-0">
          <div
            className="flex justify-between items-center text-white w-full font-bold
            text-[1.1rem]
          "
          >
            <h3 className="font-bold">Subtotal</h3>
            <h3>$ {formatPrice(total)} USD</h3>
          </div>

          <Button primary className="mt-6 w-full">
            CONTINUE TO CHECKOUT
          </Button>
        </div>
      </div>
    </ClientPortal>
  );
};

export default Cart;
