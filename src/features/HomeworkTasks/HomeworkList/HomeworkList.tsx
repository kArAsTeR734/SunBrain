import HomeworkTaskList from '../HomeworkTaskList/HomeworkTaskList.tsx';
import classes from './homeworkList.module.css';
import {Task} from "@/shared/types/TaskTypes.ts";
import { useEffect, useState } from 'react';
import { mathTasks } from '@/shared/constants/mathTasks.ts';
import { physicTasks } from '@/shared/constants/physicTasks.ts';
import { SubjectPath } from '@/app/providers/routes/config.tsx';
import {useOutletContext} from 'react-router-dom'

const TaskList = () => {
  const [taskItems, setTaskItems] = useState<Task[]>([]);
  const {subjectId} = useOutletContext<{ subjectId: SubjectPath }>();

  useEffect(() => {
    if(subjectId === "emath"){
      setTaskItems(mathTasks);
    }
    if(subjectId==="ephysic"){
      setTaskItems(physicTasks);
    }
  },[subjectId])
  return (
    <>
      <section className={classes.homeworkList}>
        <div className="container">
          <HomeworkTaskList homeworkItems={taskItems} />
        </div>
      </section>
    </>
  );
};

export default TaskList;
