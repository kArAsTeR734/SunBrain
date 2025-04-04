import classes from './calendarItem.module.css'
import CalendarTaskList from "../CalendarTaskList/CalendarTaskList.tsx";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const CalendarItem = ({dataTime,...props}) => {
    return (
        <>
            <div className={classes.calendar__item}>
                <div className={classes.calendar__data}>{dataTime.date}</div>
                <div className={classes.calendar__day}>{dataTime.weekDay}</div>
                <CalendarTaskList {...props}/>
            </div>
        </>
    );
};

export default CalendarItem;