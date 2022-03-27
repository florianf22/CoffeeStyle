import * as React from 'react';
import { AdjustmentAction } from './reducer';
import axios from '../../lib/axios';
import { fetchAsync } from '../../lib/api-helpers';

export const createActions = (dispatch: React.Dispatch<AdjustmentAction>) => {
  const fetchNotFeaturedMugs = fetchAsync(
    () => axios.get('/mugs/not-featured-mugs'),
    dispatch,
  );

  return {
    fetchNotFeaturedMugs,
  };
};

export type ActionCreatorsReturnType = ReturnType<typeof createActions>;
