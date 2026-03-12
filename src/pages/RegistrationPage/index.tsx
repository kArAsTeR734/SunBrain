import RegistrationForm, {
  RegistrationFormInput,
} from '@/features/Authorization/RegistrationForm/RegistrationForm.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import Header from '@/widgets/Header';

const RegistrationPage = () => {
  const methods = useForm<RegistrationFormInput>();
  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <RegistrationForm />
      </FormProvider>
    </>
  );
};

export default RegistrationPage;
