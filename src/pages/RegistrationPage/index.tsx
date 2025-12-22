import RegistrationForm, {
  RegistrationFormInput,
} from './components/RegistrationForm/RegistrationForm.tsx';
import Header from '../../widgets/Header/Header.tsx';
import { FormProvider, useForm } from 'react-hook-form';

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
