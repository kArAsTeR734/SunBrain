import classes from './calendarTask.module.css'
import {FC} from "react";
import {ICalendarTask} from "../../models/CalendarTask.ts";

const CalendarTask:FC<ICalendarTask> = ({...props}) => {

    return (
        <>
            <div className={classes.calendar__task__item}>
                <div className={classes.calendar__task__wrapper}>
                    <div className={classes.calendar__task__subject}>{props.subject}</div>
                    <div className={classes.calendar__task__title}>Домашнее задание</div>
                    <div className={classes.calendar__task__theme}>{props.theme}</div>
                    <div className={classes.calendar__task__deadline}>{props.deadline}</div>
                </div>
            </div>
        </>
    );
};

export default CalendarTask;