import classes from './calendarSlider.module.css';
import CalendarItem from '../CalendarItem/CalendarItem.tsx';
import {useEffect, useState} from 'react';
import {CalendarItemInterface} from '../../models/types.ts'
import {tasks} from "../../../StudentObjectCatalog/components/db/tasks.ts";
import {data} from "../../db/data.ts";

const CalendarSlider = () => {
  const [calendarItems,setCalendarItems] = useState<CalendarItemInterface[]>([])

  useEffect(() => {
    const items = data.map((dateItem, index) => ({
      date: dateItem,
      task: tasks[index] || null
    }));

    setCalendarItems(items);
  }, []);

  return (
    <>
      <section className={classes.calendar}>
        <div className={classes.calendar__wrapper}>
          {calendarItems.map((item, index) => (
              <CalendarItem
                  key={index}
                  dataTime={item.date}
                  task={item.task}
              />
          ))}
        </div>
      </section>
    </>
  );
};

export default CalendarSlider;
