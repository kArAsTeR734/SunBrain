import './calendarItem.css';
import CalendarTaskList from '../CalendarTaskList/CalendarTaskList.tsx';
import {FC} from "react";
import {CalendarTaskInterface, DataTime} from "../../models/types.ts";

export interface CalendarItemProps{
  dataTime:DataTime,
  task:CalendarTaskInterface
}

const CalendarItem:FC<CalendarItemProps> = ({dataTime,task}) => {
  return (
    <>
      <div className='calendar__item'>
        <div className='calendar__data'>{dataTime.date}</div>
        <div className='calendar__day'>{dataTime.weekDay}</div>
        <CalendarTaskList task={task}/>
      </div>
    </>
  );
};

export default CalendarItem;
