import React, { ButtonHTMLAttributes, FC} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
