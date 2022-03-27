import { Blog } from '@prisma/client';
import * as React from 'react';
import { AdjustmentAction } from './reducer';

export const createActions = (dispatch: React.Dispatch<AdjustmentAction>) => {
  return {};
};

export type ActionCreatorsReturnType = ReturnType<typeof createActions>;
