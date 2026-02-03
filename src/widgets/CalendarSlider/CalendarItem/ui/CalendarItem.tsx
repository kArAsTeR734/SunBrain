import './calendarItem.css';
import {FC} from "react";
import {CalendarTaskInterface, DataTime} from "@/shared/types/calendarTypes.ts";
import CalendarTaskList from "@/widgets/CalendarSlider/CalendarTaskList";

export interface CalendarItemProps{
  dataTime:DataTime,
  task:CalendarTaskInterface
}

export const CalendarItem:FC<CalendarItemProps> = ({dataTime,task}) => {
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

