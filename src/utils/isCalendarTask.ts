import {CalendarTaskInterface} from "../shared/types/calendarTypes.ts";

export function isTask(task: CalendarTaskInterface | null) {
  if(!task)
    return false;

  return !(task.deadline.length == 0 && task.subject?.length == 0 && task.theme?.length == 0) ;
}