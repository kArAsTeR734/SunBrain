import classes from './taskTheme.module.css'
import {FC} from "react";
import {Theme} from "../models/Theme.ts";
import {Link} from "react-router-dom";

const TaskTheme:FC<Theme> = ({...props}) => {

    return (
        <>
            <Link to = '/student/catalog/math/*'>
                <div className={classes.theme__wrapper}>
                    <span className={classes.theme__wrapper__number}>{props.themeNumber}</span>
                        <div className={classes.theme__wrapper__title}>{props.themeTitle}</div>
                </div>
            </Link>

        </>
    );
};

export default TaskTheme;