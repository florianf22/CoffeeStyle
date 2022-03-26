import * as React from 'react';
import { useImmerReducer } from 'use-immer';
import { ActionCreatorsReturnType } from './action-creators';
import { createActions } from './action-creators';
import { StateType, AdjustmentAction, reducer } from './reducer';

interface MugsContextI extends StateType {
  dispatch: React.Dispatch<AdjustmentAction>;
  actions: ActionCreatorsReturnType;
}

const initialState: StateType = {
  mugs: [],
  error: '',
  loading: false,
};

export const MugsContext = React.createContext<MugsContextI>(
  initialState as MugsContextI,
);

export const MugsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const actions = React.useMemo(() => createActions(dispatch), [dispatch]);

  return (
    <MugsContext.Provider
      value={{
        ...state,
        dispatch,
        actions,
      }}
    >
      {children}
    </MugsContext.Provider>
  );
};
