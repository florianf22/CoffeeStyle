import * as React from 'react';
import { Mug } from '@prisma/client';
import { AdjustmentAction } from './reducer';
import axios from '../../lib/axios';

export const createActions = (dispatch: React.Dispatch<AdjustmentAction>) => {
  const fetchNotFeaturedMugs = async (): Promise<void> => {
    try {
      dispatch({ type: 'CHANGE_LOADING', payload: true });

      const json = await axios.get('/mugs/not-featured-mugs');

      dispatch({ type: 'ADD_MUGS', payload: json.data.data });

      dispatch({ type: 'CHANGE_LOADING', payload: false });
    } catch (err: any) {
      const { message } = err.response.data.error;

      dispatch({ type: 'SET_ERROR', payload: message });
      dispatch({ type: 'CHANGE_LOADING', payload: false });
    }
  };

  return {
    fetchNotFeaturedMugs,
  };
};

export type ActionCreatorsReturnType = ReturnType<typeof createActions>;
