import LoginForm, {
  LoginFormInput,
} from '@/features/Authorization/LoginForm/LoginForm.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import Header from "@/widgets/Header";

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
