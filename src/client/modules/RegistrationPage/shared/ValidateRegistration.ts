import * as Yup from "yup";

interface RegistrationFormValues {
    firstName: string,
    surname: string,
    patronymic: string,
    email: string,
    phone: string,
    password: string,
    password_confirm:string,
}

export const initialValues: RegistrationFormValues = {
    firstName: '',
    surname: '',
    patronymic: '',
    email: '',
    phone: '',
    password: '',
    password_confirm:''
}

export const validationSchema = Yup.object().shape({
    name:Yup.string()
        .min(2,'Имя от 2 символов')
        .required('Введите имя'),
    surname: Yup.string()
        .min(3, 'Фамилия от 3 символов')
        .required('Введите фамилию'),
    patronymic: Yup.string()
        .required('Введите отчество')
        .min(5,'Отчество от 5 символов'),
    email: Yup.string()
        .min(4, 'Email адрес от 4 символов')
        .email('Невалидный email').matches(/^(?!.*@[^,]*,)/)
        .required('Введите адрес электронной почты'),
    phone:Yup.string()
        .matches(/^(8|\+7)(\s|\(|-)?(\d{3})(\s|\)|-)?(\d{3})(\s|-)?(\d{2})(\s|-)?(\d{2})$/,
            "Невалидный номер телефона")
        .required('Введите номер телефогна'),
    password: Yup.string()
        .min(8,'Пароль от 8 символов')
        .required('Введите пароль'),
    password_confirm:Yup.string()
        .min(8,'Пароль от 8 символов')
        .required('Введите пароль для подтверждения'),
});