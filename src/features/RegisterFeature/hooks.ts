import { useDispatch } from 'react-redux';
import { actions } from './slice';

const useHooks = () => {
  const dispatch = useDispatch();

  const onSubmitRegister = (data: any) => {
    dispatch(actions.register(data));
  };

  return { handlers: { onSubmitRegister }, selectors: {} };
};

export default useHooks;
