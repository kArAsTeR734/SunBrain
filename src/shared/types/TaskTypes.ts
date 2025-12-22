interface TaskInterface {
  number: number;
  description: string;
  imagePath?: string;
  answer: string;
}

export type Task = TaskInterface;
