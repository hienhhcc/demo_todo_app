import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticationError } from './selectors';
import { actions } from './slice';

const useHooks = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [openError] = useState(true);

  const error = useSelector(selectAuthenticationError);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleCloseError = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(actions.clearError({}));
  };

  return {
    handlers: { handleClose, handleCloseError },
    selectors: { error, open, openError },
  };
};

export default useHooks;
