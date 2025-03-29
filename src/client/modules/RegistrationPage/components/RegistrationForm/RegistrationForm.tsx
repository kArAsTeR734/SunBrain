import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import registrationClasses from './registrationForm.module.css'
import Button from "../../UI/Button/Button.tsx";
import buttonClasses from '../../UI/Button/button.module.css'
import inputClasses from '../../UI/Input/input.module.css'

const RegistrationForm = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstName:'',
            surname:'',
            patronymic:'',
            email: '',
            phone:'',
            password: '',
        },
        onSubmit: data => {
            console.log(data);
            navigate('/registration');
        },
    });

    return (
        <>
            <section className={registrationClasses.registration}>
                <div className="container">
                    <h2 className={registrationClasses.registration__header}>Регистрация</h2>
                    <div className={registrationClasses.registration__wrapper}>
                        <form className={registrationClasses.registration__form} onSubmit={formik.handleSubmit} method="post">
                            <label className={inputClasses.input_label} htmlFor="firtsName">Имя</label>
                            <input
                                id="firtsName"
                                name="firtsName"
                                type="firtsName"
                                placeholder="Имя"
                                className={inputClasses.input}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />

                            <label className={inputClasses.input_label} htmlFor="secondName">Фамилия</label>
                            <input
                                id="secondName"
                                name="secondName"
                                type="secondName"
                                placeholder="Фамилия"
                                className={inputClasses.input}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <label className={inputClasses.input_label} htmlFor="Surname">Отчество</label>
                            <input
                                id="Surname"
                                name="Surname"
                                type="Surname"
                                placeholder="Фамилия"
                                className={inputClasses.input}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <label className={inputClasses.input_label} htmlFor="Patronymic">Адрес электронной
                                почты</label>
                            <input
                                id="Patronymic"
                                name="Patronymic"
                                type="Patronymic"
                                placeholder="Отчество"
                                className={inputClasses.input}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <label className={inputClasses.input_label} htmlFor="email">Номер телефона</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                className={inputClasses.input}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <label className={inputClasses.input_label} htmlFor="secondName">Пароль</label>
                            <input
                                id="secondName"
                                name="secondName"
                                type="secondName"
                                placeholder="Фамилия"
                                className={inputClasses.input}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <label className={inputClasses.input_label} htmlFor="secondName">Пароль для подтверждения</label>
                            <input
                                id="secondName"
                                name="secondName"
                                type="secondName"
                                placeholder="Фамилия"
                                className={inputClasses.input}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <div className={registrationClasses.registration__actions}>
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

export default RegistrationForm;