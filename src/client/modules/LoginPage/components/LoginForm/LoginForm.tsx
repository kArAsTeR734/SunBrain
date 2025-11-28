import loginClasses from "./loginForm.module.css";
import {Form, Formik} from 'formik';
import Button from "../../UI/Button/Button.tsx";
import buttonClasses from "../../UI/Button/button.module.css";
import {Link, useNavigate} from 'react-router-dom'
import Input from "../../UI/Input/Input.tsx";
import {initialValues, validationSchema} from "../../shared/ValidateLogin.ts";

const LoginForm = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className={loginClasses.login}>
                <div className="container">
                    <h2 className={loginClasses.login__header}>Войти</h2>
                    <div className={loginClasses.login__wrapper}>
                        <Formik
                            initialValues ={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={() => navigate('/student/account')}
                        >
                            <Form className={loginClasses.login__form}>
                                <Input
                                    label="Адрес электронной почты"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <Input
                                    label="Пароль"
                                    name="password"
                                    id="password"
                                    placeholder="Пароль"
                                />
                                <div className={loginClasses.login__actions}>
                                    <Button className={[buttonClasses.button, buttonClasses.loginButton].join(' ')}>
                                        <Link
                                            className={buttonClasses.button__text}
                                            to="/student/account"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Войти
                                        </Link>
                                    </Button>
                                    <div className={loginClasses.login__actions_divider}>
                                        Или
                                    </div>
                                    <Button className={[buttonClasses.button, buttonClasses.registrationButton].join(' ')}>
                                        <Link
                                            className={buttonClasses.button__text}
                                            to="/registration"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Зарегистрироваться
                                        </Link>
                                    </Button>
                                </div>
                            </Form>
                        </Formik>

                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginForm;