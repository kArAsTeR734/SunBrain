import './homeworkTaskList.scss';
import { useHomeworkTasks } from '@features/HomeworkTasks/model/useHomeworkTasks.ts';
import { useParams } from 'react-router-dom';
import { Loader, TaskItem, TaskList } from '@shared/ui';

export const HomeworkTaskList = () => {
  const { homeworkId } = useParams();
  const { data: homework, isLoading } = useHomeworkTasks(Number(homeworkId));
  return (
    <>
      <TaskList>
        {isLoading && <Loader />}
        {homework?.tasks.map((task) => (
          <TaskItem isHomeworkTask={true} key={task.number} task={task} />
        ))}
      </TaskList>
    </>
  );
};
