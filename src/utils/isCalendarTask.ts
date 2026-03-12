import { HomeworkListItem } from '@entities/Homework/model/types.ts';

export function isTask(task: HomeworkListItem | null) {
  if (!task) return false;

  return !(
    task.deadline.length == 0 &&
    task.subject?.length == 0 &&
    task.title?.length == 0
  );
}
