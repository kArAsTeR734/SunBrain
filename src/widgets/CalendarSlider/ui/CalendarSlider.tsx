import './calendarSlider.scss';
import { useMemo } from 'react';
import CalendarItem from '@/widgets/CalendarSlider/CalendarItem';
import getCalendarDates from '@features/Calendar/getCalendarDates.ts';
import { useHomework } from '@features/HomeworkTasks/model/useHomework.ts';
import { groupHomeworksByDate } from '@features/HomeworkTasks/model/setHomeworks.ts';
import CalendarTaskList from '@widgets/CalendarSlider/CalendarTaskList';
import { CalendarCell } from '@/entities/Calendar';

export const CalendarSlider = () => {
  const days = getCalendarDates();
  const { data: homeworks } = useHomework();
  const homeworksByDate = useMemo(
    () => groupHomeworksByDate(homeworks ?? []),
    [homeworks],
  );

  const calendarItems = useMemo(() => {
    return days.flatMap((dateItem) => ({
      date: dateItem,
      tasks: homeworksByDate[dateItem.date] ?? [],
    }));
  }, [days, homeworksByDate]);

  return (
    <>
      <section className="calendar">
        <div className="calendar__wrapper">
          {calendarItems.map((item) => (
            <CalendarCell key={item.date.date}>
              <CalendarItem dataTime={item.date} />
              <CalendarTaskList tasks={item.tasks} />
            </CalendarCell>
          ))}
        </div>
      </section>
    </>
  );
};
