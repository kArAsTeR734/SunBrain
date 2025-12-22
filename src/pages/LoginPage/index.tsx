import Header from '../../widgets/Header/Header.tsx';
import LoginForm, {
  LoginFormInput,
} from './components/LoginForm/LoginForm.tsx';
import { FormProvider, useForm } from 'react-hook-form';

const LoginPage = () => {
  const methods = useForm<LoginFormInput>();
  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <LoginForm />
      </FormProvider>
    </>
  );
};

export default LoginPage;
