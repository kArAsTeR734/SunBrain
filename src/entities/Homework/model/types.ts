
export interface HomeworkBase {
  id: number,
  title: string,
  subject:string
  deadline: string,
}

export interface HomeworkTask {
  id: number,
  number: number,
  question: string,
  points: number
}

export interface Homework extends HomeworkBase {
  tasks: HomeworkTask[]
}

export interface HomeworkListItem extends HomeworkBase {
  tasksCount: number
}

export interface MyHomeworksResponse {
  homeworks: HomeworkListItem[]
}
