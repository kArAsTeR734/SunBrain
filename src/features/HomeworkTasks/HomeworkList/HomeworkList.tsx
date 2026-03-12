import HomeworkTaskList from '../HomeworkTaskList/HomeworkTaskList.tsx';
import classes from './homeworkList.module.css';
import { useHomeworkTasks } from '@features/HomeworkTasks/model/useHomeworkTasks.ts';

const TaskList = () => {
  const {data:taskItems} = useHomeworkTasks();

  return (
    <>
      <section className={classes.homeworkList}>
        <div className="container">
          <HomeworkTaskList homeworkItems={taskItems ?? []} />
        </div>
      </section>
    </>
  );
};

export default TaskList;
