import HomeworkCard from '@entities/Homework/ui/HomeworkCard.tsx';
import { SubmitButton } from '@features/HomeworkTasks/SubmitHomework.tsx';
import './HomeworkList.scss';
import { useHomework } from '@features/HomeworkTasks/model/useHomework.ts';

export const HomeworkList = () => {
  const { data:homeworks, isFetching, isError } = useHomework();

  if (!homeworks || isError) {
    return;
  }

  return (
    <div className="homework-list">
      {isFetching ? <h1>Список домашних заданий загружается...</h1>
        : homeworks.map((task) => (
          <HomeworkCard
            key={task.id}
            task={task}
            action={<SubmitButton homeworkId={task.id} />} />
        ))
      }
    </div>
  );
};

