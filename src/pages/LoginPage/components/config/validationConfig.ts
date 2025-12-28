import {RegistrationFormInput} from "../../../RegistrationPage/components/RegistrationForm/RegistrationForm.tsx";

export const emailValidation = {
  required: 'Поле обязательно к заполнению',
  minLength: {
    value: 5,
    message: 'Минимальная длина 7 символов',
  },
};

export const fullNameValidation = {
  required: 'Поле обязательно к заполнению',
  minLength: {
    value: 3,
    message: 'Минимальная длина 3 символа',
  },
};

export const roleValidation = {
  required: 'Поле обязательно к заполнению',
  minLength: {
    value: 4,
    message: 'Минимальная длина 4 символа',
  },
};

export const passwordValidation = {
  required: 'Поле обязательно к заполнению' as const,
  minLength: {
    value: 5,
    message: 'Минимальная длина 6 символов' as const,
  },
};

export const confirmPasswordValidation = {
  required: 'Подтвердите пароль' as const,
  validate: (value: string, formValues: RegistrationFormInput) =>
    value === formValues.password || 'Пароли не совпадают',
};
