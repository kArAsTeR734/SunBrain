import loginClasses from "./loginForm.module.css";
import {FC} from "react";
import {useFormik,} from 'formik';
import Button from "../../UI/Button/Button.tsx";
import inputClasses from "../../UI/Input/input.module.css";
import buttonClasses from "../../UI/Button/button.module.css";
import {Link, useNavigate} from 'react-router-dom'
// interface MyFormValues {
//     email: string;
//     phone: string;
//     password: string;
// }

const LoginForm: FC = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: data => {
            console.log(data);
            navigate('/registration');
        },
    });

    return (
        <>
            <section className={loginClasses.login}>
                <div className="container">
                    <h2 className={loginClasses.login__header}>Войти</h2>
                    <div className={loginClasses.login__wrapper}>
                        <form className={loginClasses.login__form} onSubmit={formik.handleSubmit} method="post">
                            <label className={inputClasses.email__label} htmlFor="email">Адрес электронной почты</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                className={inputClasses.email}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />

                            <label className={inputClasses.password__label} htmlFor="email">Пароль</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Пароль"
                                className={inputClasses.password}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <div className={loginClasses.login__actions}>
                                <Button className={[buttonClasses.button, buttonClasses.loginButton].join(' ')}>
                                    <Link
                                        className={buttonClasses.button__text}
                                        to="/lk"
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
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginForm;