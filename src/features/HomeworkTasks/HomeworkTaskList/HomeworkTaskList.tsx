import classes from './homeworkTaskList.module.css';
import HomeworkItem from '../HomeworkItem/HomeworkItem.tsx';
import { FC } from 'react';
import { HomeworkTask } from '@entities/Homework/model/types.ts';

interface HomeworkTaskListProps {
  homeworkItems: HomeworkTask[];
}

const HomeworkTaskList: FC<HomeworkTaskListProps> = ({ homeworkItems }) => {
  return (
    <>
      <section className={classes.homework__taskList}>
        {homeworkItems ? (
          homeworkItems.map((task) => (
            <HomeworkItem key={task.number} task={task} />
          ))
        ) : (
          <h1 style={{ textAlign: 'center' }}>Задач по этой теме пока нет</h1>
        )}
      </section>
    </>
  );
};

export default HomeworkTaskList;
