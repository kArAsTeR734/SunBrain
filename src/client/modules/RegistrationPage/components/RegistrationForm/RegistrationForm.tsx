import {Link, useNavigate} from "react-router-dom";
import {Form, Formik} from "formik";
import registrationClasses from './registrationForm.module.css'
import Button from "../../UI/Button/Button.tsx";
import buttonClasses from '../../UI/Button/button.module.css'
import loginClasses from "../../../LoginPage/components/LoginForm/loginForm.module.css";
import Input from "../../../LoginPage/UI/Input/Input.tsx";
import {initialValues, validationSchema} from "../../shared/ValidateRegistration.ts";

const RegistrationForm = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className={registrationClasses.registration}>
                <div className="container">
                    <h2 className={registrationClasses.registration__header}>Регистрация</h2>
                    <div className={registrationClasses.registration__wrapper}>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={() => navigate('/student/account')}
                        >
                            <Form className={loginClasses.login__form}>
                                <Input
                                    type="text"
                                    label="Имя"
                                    id="name"
                                    name="name"
                                    placeholder="Иван"
                                />
                                <Input
                                    type = "text"
                                    label="Фамилия"
                                    name="surname"
                                    id="surname"
                                    placeholder="Иванов"
                                />
                                <Input
                                    type = "text"
                                    label="Отчество"
                                    name="patronymic"
                                    id="patronymic"
                                    placeholder="Иванович"
                                />
                                <Input
                                    type="email"
                                    label="Адрес электронной почты"
                                    name="email"
                                    id="email"
                                    placeholder="example@mail.ru"
                                />
                                <Input
                                    type="phone"
                                    label="Номер телефона"
                                    name="phone"
                                    id="phone"
                                    placeholder="+7(800)-555-35-35"
                                />
                                <Input
                                    type="password"
                                    label="Пароль"
                                    name="password"
                                    id="password"
                                    placeholder="******"
                                />
                                <Input
                                    type="password"
                                    label="Подтверждение пароля"
                                    name="password_confirm"
                                    id="pasword_confirm"
                                    placeholder="******"
                                />

                                <div className={loginClasses.login__actions}>
                                    <Button className={[buttonClasses.button, buttonClasses.loginButton].join(' ')}>
                                        <Link
                                            className={buttonClasses.button__text}
                                            to="/student/account"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Зарегистрироваться
                                        </Link>
                                    </Button>
                                    <div className={loginClasses.login__actions_divider}>
                                        Или
                                    </div>
                                    <Button
                                        className={[buttonClasses.button, buttonClasses.registrationButton].join(' ')}>
                                        <Link
                                            className={buttonClasses.button__text}
                                            to="/registration"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Уже есть аккаунт
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

export default RegistrationForm;