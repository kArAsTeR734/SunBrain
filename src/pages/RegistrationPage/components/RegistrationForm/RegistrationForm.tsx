import {Link, useNavigate} from 'react-router-dom';
import registrationClasses from './registrationForm.module.css';
import loginClasses from '../../../LoginPage/components/LoginForm/loginForm.module.css';
import {useFormValidationContext} from '@/shared/hooks/useFormValidationContext.ts';
import {SubmitHandler} from 'react-hook-form';
import {TextField} from '@mui/material';
import clsx from 'clsx';
import Button from "../../../../shared/ui/Button/Button.tsx";
import {
  confirmPasswordValidation,
  emailValidation,
  passwordValidation
} from "../../../LoginPage/components/config/validationConfig.ts";

export interface RegistrationFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, shouldShowError, getErrorMessage} =
      useFormValidationContext<RegistrationFormInput>();

  const onSubmit: SubmitHandler<RegistrationFormInput> = async () => {
    console.log('Данные с формы отправленны');
    navigate('/student/account');
  };

  return (
      <>
        <section className={registrationClasses.registration}>
          <div className="container">
            <h2 className={registrationClasses.registration__header}>
              Регистрация
            </h2>
            <div className={registrationClasses.registration__wrapper}>
              <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={loginClasses.login__form}
              >
                <TextField
                    {...register('email', emailValidation)}
                    type="email"
                    error={shouldShowError('email')}
                    helperText={shouldShowError('email') ? getErrorMessage('email') : ''}
                    label="Логин"
                    id="email"
                    name="email"
                    placeholder="example@.com"
                />
                <TextField
                    {...register('password', passwordValidation)}
                    type="password"
                    error={shouldShowError('password')}
                    helperText={shouldShowError('password') ? getErrorMessage('password') : ''}
                    label="Пароль"
                    name="password"
                    id="password"
                    placeholder="******"
                />
                <TextField
                    {...register('confirmPassword', confirmPasswordValidation)}
                    type="password"
                    error={shouldShowError('confirmPassword')}
                    helperText={shouldShowError('confirmPassword') ? getErrorMessage('confirmPassword') : ''}
                    label="Подтверждение пароля"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="******"
                />

                <div className={loginClasses.login__actions}>
                  <Button
                      className={[
                        'button',
                        'button__auth',
                      ].join(' ')}
                  >
                    <Link
                        className={clsx('button', 'button__text')}
                        to="/student/account"
                    >
                      Зарегистрироваться
                    </Link>
                  </Button>
                  <div className={loginClasses.login__actions_divider}>Или</div>
                  <Button
                      className={clsx('button', 'button__auth',)}
                  >
                    <Link className={clsx('button', 'button button__text')}
                          to="/login">
                      Уже есть аккаунт
                    </Link>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
  );
};

export default RegistrationForm;
