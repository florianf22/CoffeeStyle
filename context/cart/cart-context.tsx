import * as React from 'react';
import { useImmerReducer } from 'use-immer';
import { ActionCreatorsReturnType, createActions } from './action-creators';
import { StateType, AdjustmentAction, reducer } from './reducer';

interface CartContextI extends StateType {
  dispatch: React.Dispatch<AdjustmentAction>;
  actions: ActionCreatorsReturnType;
}

const initialState: StateType = {
  isVisible: false,
  items: [],
  total: 0,
  itemsQuantity: 0,
};

export const CartContext = React.createContext<CartContextI>(
  initialState as CartContextI,
);

export const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const actions = React.useMemo(() => createActions(dispatch), [dispatch]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        dispatch,
        actions,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
