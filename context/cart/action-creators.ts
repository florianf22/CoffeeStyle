import * as React from 'react';
import { AdjustmentAction } from './reducer';
import axios from '../../lib/axios';
import { fetchAsync } from '../../lib/api-helpers';
import { Mug } from '@prisma/client';

export const createActions = (dispatch: React.Dispatch<AdjustmentAction>) => {
  const addItemToCart = (mug: Mug, quantity: number) => {
    const item = {
      imgUrl: mug.imgUrl,
      name: mug.name,
      price: mug.price,
      quantity,
    };

    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  };

  return {
    addItemToCart,
  };
};

export type ActionCreatorsReturnType = ReturnType<typeof createActions>;
