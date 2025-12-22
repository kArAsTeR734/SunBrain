import { SubjectType } from './SubjectType.ts';
import { TaskStatus } from './TaskStatus.ts';

interface StudentData {
  name: string;
  surname: string;
  patronymic: string;
}

export interface StudentItem {
  FIO: StudentData;
  classNumber: number;
  subject: SubjectType;
  status: TaskStatus;
  taskNumber: number;
}
