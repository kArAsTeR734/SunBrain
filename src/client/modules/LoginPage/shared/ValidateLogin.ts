import * as Yup from "yup";

interface LoginFormValues {
    email: string,
    password: string,
}

export const initialValues: LoginFormValues = {email: '', password: ''};

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .min(4, 'Email адрес от 4 символов')
        .email('Невалидный email').matches(/^(?!.*@[^,]*,)/)
        .required('Поле обязательно к заполнению'),
    password: Yup.string()
        .min(6, 'Пароль от 8 символов')
        .required('Поле обязательно к заполнению'),
});
