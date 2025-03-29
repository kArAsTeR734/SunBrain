import {FC} from "react";

interface InputProps {
    className: string,
}

const Input:FC<InputProps> = ({className,...props}) => {
    return (
        <input
            className={className}
            {...props}>

        </input>
    );
};

export default Input;