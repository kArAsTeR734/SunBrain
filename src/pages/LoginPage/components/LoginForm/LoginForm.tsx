import loginClasses from './loginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormValidationContext } from '@/shared/hooks/useFormValidationContext.ts';
import { SubmitHandler } from 'react-hook-form';
import { TextField } from '@mui/material';
import {
  emailValidation,
  passwordValidation,
} from '../config/validationConfig.ts';
import clsx from 'clsx';
import Button from "../../../../shared/ui/Button/Button.tsx";
import '../../../../shared/ui/Button/button.css'

export interface LoginFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, shouldShowError, getErrorMessage } =
    useFormValidationContext<LoginFormInput>();

  const onSubmit: SubmitHandler<LoginFormInput> = () => {
    console.log('Данные с формы отправленны');
    navigate('/student/account');
  };

  return (
    <>
      <section className={loginClasses.login}>
        <div className="container">
          <h2 className={loginClasses.login__header}>Войти</h2>
          <div className={loginClasses.login__wrapper}>
            <form
              onSubmit={() => handleSubmit(onSubmit)}
              className={loginClasses.login__form}
            >
              <TextField
                {...register('email', emailValidation)}
                error={shouldShowError('email')}
                helperText={
                  shouldShowError('email') ? getErrorMessage('email') : ''
                }
                label="Email"
                id="email"
                name="email"
                placeholder="Email"
                type={'email'}
              />
              <TextField
                {...register('password', passwordValidation)}
                error={shouldShowError('password')}
                helperText={
                  shouldShowError('password') ? getErrorMessage('password') : ''
                }
                label="Пароль"
                name="password"
                id="password"
                placeholder="Пароль"
                type="password"
              />
              <div className={loginClasses.login__actions}>
                <Button
                  className={clsx(
                    'button',
                    'button__auth',
                  )}
                >
                  <Link to="/student/account">Войти</Link>
                </Button>
                <div className={loginClasses.login__actions_divider}>Или</div>
                <Button
                  className={clsx(
                    'button',
                    'button__auth',
                  )}
                >
                  <Link to="/registration">Зарегистрироваться</Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
