import classes from './homeworkTaskList.module.css';
import HomeworkItem from '../HomeworkItem/HomeworkItem.tsx';
import { tasks } from '../../db/tasks.ts';

const HomeworkTaskList = () => {
  return (
    <>
      <section className={classes.homework__taskList}>
        <h2 className={classes.homework__taskList_header}>Решаем задачи</h2>
        {tasks ? (
          tasks.map((task) => <HomeworkItem key={task.number} task={task} />)
        ) : (
          <h1 style={{ textAlign: 'center' }}>Задач по этой теме пока нет</h1>
        )}
      </section>
    </>
  );
};

export default HomeworkTaskList;
