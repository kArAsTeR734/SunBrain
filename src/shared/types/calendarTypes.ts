export interface DataTime{
  date:string,
  weekDay:string
}
export interface CalendarTaskInterface {
  deadline: string;
  subject: string;
  theme: string;
}

export interface CalendarItemInterface{
  task:CalendarTaskInterface,
  date:DataTime,
}
