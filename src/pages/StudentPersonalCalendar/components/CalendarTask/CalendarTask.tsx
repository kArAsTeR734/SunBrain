import './calendarTask.css';
import { FC } from 'react';
import {CalendarTaskInterface} from "../../models/types.ts";

const CalendarTask: FC<CalendarTaskInterface> = ({theme,subject,deadline}) => {
  return (
    <>
      <div className='calendar__task-item'>
        <div className='calendar__task-wrapper'>
          <div className='calendar__task-subject'>{subject}</div>
          <div className='calendar__task-title'>Домашнее задание</div>
          <div className='calendar__task-theme'>{theme}</div>
          <div className='calendar__task-deadline'>
            {deadline}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarTask;
