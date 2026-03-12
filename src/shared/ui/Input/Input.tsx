import { FC } from 'react';
import './input.css';
import { ErrorMessage, Field } from 'formik';

interface InputProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type: 'text' | 'email' | 'password' | 'phone';
}

const Input: FC<InputProps> = ({ id, label, name, placeholder, type }) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <Field
        type={type}
        className="field__input"
        name={name}
        id={id}
        placeholder={placeholder}
      />
      <ErrorMessage name={name}>
        {(error) => <span className="field__span">{error}</span>}
      </ErrorMessage>
    </div>
  );
};

export default Input;
