import { HomeworkListItem } from '@entities/Homework/model/types.ts';

export interface DataTimeInterface {
  date: string;
  weekDay: string;
}

export interface CalendarItemInterface {
  task: HomeworkListItem[];
  date: DataTime;
}

export type DataTime = DataTimeInterface

export type CalendarTask = CalendarItemInterface;
