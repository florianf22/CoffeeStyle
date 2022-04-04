import type { Blog } from '@prisma/client';
import { CartItem } from '../../types';

type toggleVisibility = {
  type: 'TOGGLE_VISIBILITY';
};

type AddItem = {
  type: 'ADD_ITEM';
  payload: CartItem;
};

type removeItem = {
  type: 'REMOVE_ITEM';
  payload: string;
};

export type AdjustmentAction = toggleVisibility | AddItem | removeItem;

export type StateType = {
  isVisible: boolean;
  items: CartItem[];
  total: number;
  itemsQuantity: number;
};

export const reducer = (state: StateType, action: AdjustmentAction) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY': {
      state.isVisible = !state.isVisible;
      return state;
    }
    case 'ADD_ITEM': {
      const { name } = action.payload;
      const itemExists = state.items.find(item => item.name === name);

      if (itemExists) {
        itemExists.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      state.total = state.items.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);

      state.itemsQuantity = state.items.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);

      return state;
    }
    case 'REMOVE_ITEM': {
      const name = action.payload;
      const idx = state.items.findIndex(item => item.name === name);

      if (idx !== -1) {
        state.items.splice(idx, 1);
      }

      state.total = state.items.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);

      state.itemsQuantity = state.items.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);

      return state;
    }
    default:
      return state;
  }
};
