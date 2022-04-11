import { yupResolver } from '@hookform/resolvers/yup';
import { createElement } from 'react';
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form';
import * as yup from 'yup';

import { StyledForm } from '../../features/LoginFeature/styles';

interface Props<T> {
  children: React.ReactElement[];
  onSubmit: SubmitHandler<T>;
  schema?: yup.AnyObjectSchema;
  options: UseFormProps | any;
}

const Form = <T,>({ schema, children, onSubmit, options }: Props<T>) => {
  const resolver = schema ? yupResolver(schema) : undefined;
  options = { ...options, resolver };
  const methods = useForm<T>(options);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {children.map((child: any) => {
          if (child.name) {
            return createElement(child.type, {
              key: child.name,
              ...child.props,
            });
          } else {
            return child;
          }
        })}
      </StyledForm>
    </FormProvider>
  );
};

export default Form;
