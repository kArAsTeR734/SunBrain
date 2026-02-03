import {type Task} from '@/shared/types/TaskTypes.ts';

export interface GenerateTaskRequest {
  studentId:number,
  prompt:string,
}

export interface TestResult {
  topic: string;
  score: number;
  date: string;
}

export interface GenerateTaskResponse {
  success: boolean;
  task: Task;
}