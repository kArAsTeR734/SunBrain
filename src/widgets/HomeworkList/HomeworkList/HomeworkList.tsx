import { SubmitButton } from '@features/HomeworkTasks/ui/SubmitHomework/SubmitHomework.tsx';
import './HomeworkList.scss';
import { useHomework } from '@features/HomeworkTasks/model/useHomework.ts';
import { HomeworkCard } from '@entities/Homework/ui';

export const HomeworkList = () => {
  const { data: homeworks, isFetching, isError } = useHomework();

  if (!homeworks || isError) {
    return;
  }

  return (
    <div className="homework-list">
      {isFetching ? <h1>Список домашних заданий загружается...</h1>
        : homeworks.map((homework) => (
          <HomeworkCard
            key={homework.id}
            homework={homework}
            action={<SubmitButton homeworkId={homework.id} />} />
        ))
      }
    </div>
  );
};

