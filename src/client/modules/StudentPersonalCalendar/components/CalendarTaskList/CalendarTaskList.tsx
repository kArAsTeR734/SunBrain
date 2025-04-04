import CalendarTask from "../CalendarTask/CalendarTask.tsx";
import classes from './calendarTaskList.module.css'
import {ICalendarTask} from "../../models/CalendarTask.ts";

function isTask({...props}:ICalendarTask){
    return !(props.deadline?.length == 0 && props.subject?.length==0 && props.theme?.length == 0);
}

const CalendarTaskList = ({...props}:ICalendarTask) => {
    const haveATask = isTask(props);
    return (
        haveATask &&
        <>
            <div className={classes.calendar__tasks}>
                <CalendarTask {...props}/>
            </div>
        </>
    );
};

export default CalendarTaskList;