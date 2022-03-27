import * as React from 'react';
import { useImmerReducer } from 'use-immer';
import { ActionCreatorsReturnType } from './action-creators';
import { createActions } from './action-creators';
import { StateType, AdjustmentAction, reducer } from './reducer';

interface BlogsContextI extends StateType {
  dispatch: React.Dispatch<AdjustmentAction>;
  actions: ActionCreatorsReturnType;
}

const initialState: StateType = {
  blogs: [],
};

export const BlogsContext = React.createContext<BlogsContextI>(
  initialState as BlogsContextI,
);

export const BlogsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const actions = React.useMemo(() => createActions(dispatch), [dispatch]);

  return (
    <BlogsContext.Provider
      value={{
        ...state,
        dispatch,
        actions,
      }}
    >
      {children}
    </BlogsContext.Provider>
  );
};
