import './homeworkTaskList.module.scss';
import HomeworkItem from '../HomeworkItem/HomeworkItem.tsx';
import { useHomeworkTasks } from '@features/HomeworkTasks/model/useHomeworkTasks.ts';
import { useParams } from 'react-router-dom';

const HomeworkTaskList = () => {
  const {homeworkId} = useParams();
  const { data: homework } = useHomeworkTasks(Number(homeworkId))

  return (
    <>
      <section className="homework__task-list">
        <div className="container">
          {homework ? (
            homework.tasks.map((task) => (
              <HomeworkItem key={task.number} task={task} />
            ))
          ) : (
            <h1 className="homework__task-list--header">Задач по этой теме пока нет</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default HomeworkTaskList;
