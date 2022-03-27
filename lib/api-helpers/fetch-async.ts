import { AdjustmentAction } from '../../context/mugs/reducer';

export const fetchAsync =
  (func: Function, dispatch: React.Dispatch<AdjustmentAction>) => async () => {
    try {
      dispatch({ type: 'CHANGE_LOADING', payload: true });

      const json = await func();

      dispatch({ type: 'ADD_MUGS', payload: json.data.data });

      dispatch({ type: 'CHANGE_LOADING', payload: false });
    } catch (err: any) {
      const { message } = err.response.data.error;

      dispatch({ type: 'SET_ERROR', payload: message });
      dispatch({ type: 'CHANGE_LOADING', payload: false });
    }
  };
