import classes from './homeworkTaskList.module.css'
import HomeworkItem from "../HomeworkItem/HomeworkItem.tsx";

const HomeworkTaskList = () => {
    return (
        <>
            <section className={classes.homework__taskList}>
                <h2 className={classes.homework__taskList_header}>Решаем задачи</h2>
                <HomeworkItem/>
                <HomeworkItem/>
                <HomeworkItem/>
                <HomeworkItem/>
            </section>
        </>
    );
};

export default HomeworkTaskList;