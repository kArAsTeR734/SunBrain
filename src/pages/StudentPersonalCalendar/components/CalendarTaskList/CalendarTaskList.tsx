import CalendarTask from '../CalendarTask/CalendarTask.tsx';
import './calendarTaskList.css';
import {isTask} from "@/utils/isCalendarTask.ts";
import {CalendarTaskInterface} from "../../models/types.ts";
import {FC} from "react";

interface CalendarTaskListProps {
  task:CalendarTaskInterface
}

const CalendarTaskList:FC<CalendarTaskListProps> = ({task}) => {
  const haveATask = isTask(task);
  return (
    haveATask && (
      <>
        <div className='calendar__tasks'>
          <CalendarTask {...task} />
        </div>
      </>
    )
  );
};

export default CalendarTaskList;
