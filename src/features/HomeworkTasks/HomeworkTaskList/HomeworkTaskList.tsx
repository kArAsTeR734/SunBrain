import classes from './homeworkTaskList.module.css';
import HomeworkItem from '../HomeworkItem/HomeworkItem.tsx';
import {Task} from "@/shared/types/TaskTypes.ts";
import {FC} from "react";

interface HomeworkTaskListProps {
  homeworkItems: Task[];
}

const HomeworkTaskList:FC<HomeworkTaskListProps> = ({homeworkItems}) => {
    return (
        <>
          <section className={classes.homework__taskList}>
            {homeworkItems ? (
                homeworkItems.map((task) => <HomeworkItem key={task.number} task={task} />)
            ) : (
                <h1 style={{ textAlign: 'center' }}>Задач по этой теме пока нет</h1>
            )}
          </section>
        </>
    );
};

export default HomeworkTaskList;
