import classes from './calendarTask.module.css';
import { FC } from 'react';
import {CalendarTaskInterface} from "../../models/types.ts";

const CalendarTask: FC<CalendarTaskInterface> = ({theme,subject,deadline}) => {
  return (
    <>
      <div className={classes.calendar__task__item}>
        <div className={classes.calendar__task__wrapper}>
          <div className={classes.calendar__task__subject}>{subject}</div>
          <div className={classes.calendar__task__title}>Домашнее задание</div>
          <div className={classes.calendar__task__theme}>{theme}</div>
          <div className={classes.calendar__task__deadline}>
            {deadline}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarTask;
