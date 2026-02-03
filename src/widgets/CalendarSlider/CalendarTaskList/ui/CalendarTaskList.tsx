import CalendarTask from '@/widgets/CalendarSlider/CalendarTaskList/ui/CalendarTask/CalendarTask.tsx';
import './calendarTaskList.css';
import {isTask} from "@/utils/isCalendarTask.ts";
import {CalendarTaskInterface} from "@/shared/types/calendarTypes.ts";
import {FC} from "react";

interface CalendarTaskListProps {
  task: CalendarTaskInterface
}

export const CalendarTaskList: FC<CalendarTaskListProps> = ({task}) => {
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

