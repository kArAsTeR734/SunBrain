import HomeworkTaskList from '../HomeworkTaskList/HomeworkTaskList.tsx';
import classes from './homeworkList.module.css';
import Hints from "@/shared/ui/Hints/Hints.tsx";
import ProfileNavigation from "@/shared/ui/ProfileNavigation";
import {Task} from "@/shared/types/TaskTypes.ts";
import {FC} from "react";

interface HomeworkListProps {
  homeworkItems: Task[];
}

const HomeworkList:FC<HomeworkListProps> = ({homeworkItems}) => {
  return (
    <>
      <section className={classes.homeworkList}>
        <div className="container">
          <ProfileNavigation />
          <Hints />
          <HomeworkTaskList homeworkItems={homeworkItems} />
        </div>
      </section>
    </>
  );
};

export default HomeworkList;
