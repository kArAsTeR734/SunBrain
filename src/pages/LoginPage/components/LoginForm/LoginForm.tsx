import { Link, useNavigate } from 'react-router-dom';
import { useFormValidationContext } from '@/shared/hooks/useFormValidationContext.ts';
import { SubmitHandler } from 'react-hook-form';
import { TextField } from '@mui/material';
import './loginForm.scss'
import {
  emailValidation,
  passwordValidation,
} from '../config/validationConfig.ts';
import clsx from 'clsx';
import Button from "@/shared/ui/Button/Button.tsx";
import '@/shared/ui/Button/button.css'
import {LoginRequestData} from "@/api/types/api-types.ts";
import {useLogin} from "@/features/Authorization/useLogin.ts";

export interface LoginFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit, shouldShowError, getErrorMessage,reset } =
    useFormValidationContext<LoginFormInput>();
  const { mutateAsync: login} = useLogin();
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<LoginFormInput> = async (formData) => {
    const loginData: LoginRequestData = {
      email: formData.email,
      password: formData.password,
    };
    try {
      await login(loginData);
      navigate('/student/account')
    } finally {
      reset();
    }
  };

  return (
    <>
      <section className='login'>
        <div className="container">
          <h2 className='login__header'>Войти</h2>
          <div className='login__wrapper'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='login__form'
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
              <div className='login__actions'>
                <Button
                  type='submit'
                  className={clsx(
                    'button',
                    'button__auth',
                  )}
                >
                  Войти
                </Button>
                <div className='login__actions_divider'>Или</div>
                <Button
                  type='button'
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
