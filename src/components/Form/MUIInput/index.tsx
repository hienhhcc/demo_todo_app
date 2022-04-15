import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { Fragment } from 'react';

import { DisplayErrorMessage } from 'components';

interface Props {
  name: string;
  inputProps?: TextFieldProps;
}

const MUIInput = ({ name, inputProps }: Props) => {
  const { register, control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState: { errors },
      }) => (
        <Fragment>
          <TextField
            sx={{ width: '100%', mt: 2 }}
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            value={value}
            inputRef={ref}
            {...inputProps}
          />
          <DisplayErrorMessage errors={errors} fieldName={name} />
        </Fragment>
      )}
    />

    // <Fragment>
    //   <TextField
    //     sx={{ width: '100%', mt: 2 }}
    //     {...inputProps}
    //     {...register(name)}
    //   />
    //   <DisplayErrorMessage errors={errors} fieldName={name} />
    // </Fragment>
  );
};

export default MUIInput;
