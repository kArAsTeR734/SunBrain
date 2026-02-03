import './calendarSlider.css';
import {useEffect, useState} from 'react';
import {CalendarItemInterface} from '@/shared/types/calendarTypes.ts'
import {calendarTasks} from "@/shared/constants/calendarTasks.ts";
import {data} from "@/shared/constants/data.ts";
import CalendarItem from "@/widgets/CalendarSlider/CalendarItem";

export const CalendarSlider = () => {
  const [calendarItems,setCalendarItems] = useState<CalendarItemInterface[]>([])

  useEffect(() => {
    const items = data.map((dateItem, index) => ({
      date: dateItem,
      task: calendarTasks[index] || null
    }));

    setCalendarItems(items);
  }, []);

  return (
    <>
      <section className='calendar'>
        <div className='calendar__wrapper'>
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