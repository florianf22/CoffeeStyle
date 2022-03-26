import type { Mug } from '@prisma/client';

type addMugs = {
  type: 'ADD_MUGS';
  payload: Mug[];
};

type setLoading = {
  type: 'CHANGE_LOADING';
  payload: boolean;
};

type setError = {
  type: 'SET_ERROR';
  payload: string;
};

export type AdjustmentAction = addMugs | setLoading | setError;

export type StateType = {
  mugs: Mug[];
  error: string;
  loading: boolean;
};

export const reducer = (state: StateType, action: AdjustmentAction) => {
  switch (action.type) {
    case 'ADD_MUGS': {
      state.mugs.push(...action.payload);
      return state;
    }
    case 'CHANGE_LOADING': {
      state.loading = action.payload;
      return state;
    }
    case 'SET_ERROR': {
      state.error = action.payload;
      return state;
    }
    default:
      return state;
  }
};
