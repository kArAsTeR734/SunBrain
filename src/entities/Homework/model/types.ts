export interface HomeworkBase {
  id: number,
  title: string,
  subject: string
  deadline: string,
}

export interface HomeworkTask {
  id: number,
  number: number,
  question: string,
  points: number
}

export interface HomeworkTopic {
  id: number,
  number: string,
  name: string,
  code: string
}

export interface Homework extends HomeworkBase {
  tasks: HomeworkTask[],
  topic: HomeworkTopic,
}

export interface HomeworkListItem extends HomeworkBase {
  tasksCount: number;
}

export interface MyHomeworksResponse {
  homeworks: HomeworkListItem[];
}

export interface CheckAnswerResponse {
  correct: boolean;
  points: number;
}

export interface CheckAnswerPayload {
  taskId:number,
  answer:string
}