import { TextField, TextFieldProps } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { Fragment } from 'react';

import { DisplayErrorMessage } from 'components';

interface Props {
  name: string;
  inputProps?: TextFieldProps;
}

const MUIInput = ({ name, inputProps }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    // <Controller
    //   control={control}
    //   name={name}
    //   render={({
    //     field: { onChange, onBlur, value, name, ref },
    //     formState: { errors },
    //   }) => () />
    <Fragment>
      <TextField
        sx={{ width: '100%', mt: 2 }}
        {...inputProps}
        {...register(name)}
      />
      <DisplayErrorMessage errors={errors} fieldName={name} />
    </Fragment>
  );
};

export default MUIInput;
