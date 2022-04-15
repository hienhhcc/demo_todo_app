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

const Form = <T,>({ children, onSubmit, options }: Props<T>) => {
  options = { ...options };
  const methods = useForm<T>(options);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>{children}</StyledForm>
    </FormProvider>
  );
};

export default Form;

// {children.map((child: any) => {
//   if (child.name) {
//     return createElement(child.type, {
//       key: child.name,
//       ...child.props,
//     });
//   } else {
//     return child;
//   }
// })}
