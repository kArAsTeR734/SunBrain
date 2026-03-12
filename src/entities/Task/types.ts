interface TaskInterface {
  number: number;
  description: string;
  imagePath?: string | undefined;
  answer: string;
}

export type Task = TaskInterface;
