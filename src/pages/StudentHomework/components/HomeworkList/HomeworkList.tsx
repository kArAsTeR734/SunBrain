import HomeworkHeader from '../HomeworkHeader/HomeworkHeader.tsx';
import HomeworkTaskList from '../HomeworkTaskList/HomeworkTaskList.tsx';
import classes from './homeworkList.module.css';
import Hints from "@/shared/ui/Hints/Hints.tsx";

const HomeworkList = () => {
  return (
    <>
      <section className={classes.homeworkList}>
        <div className="container">
          <HomeworkHeader />
          <Hints />
          <HomeworkTaskList />
        </div>
      </section>
    </>
  );
};

export default HomeworkList;
