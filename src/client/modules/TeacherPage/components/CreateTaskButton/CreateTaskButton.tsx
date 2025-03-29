import React, {FC} from "react";

interface ButtonProps {
    children?: React.ReactNode,
    className?: string,
    onClick?: () => void,
}

const CreateTaskButton:FC<ButtonProps> = ({children,className, ...props}) => {
    return (
        <button
            {...props}
            className={className}
        >
            {children}
        </button>
    );
};

export default CreateTaskButton;