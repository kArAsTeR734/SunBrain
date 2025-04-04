import HomeworkHeader from "../HomeworkHeader/HomeworkHeader.tsx";
import HomeworkHints from "../HomeworkHints/HomeworkHints.tsx";
import HomeworkTaskList from "../HomeworkTaskList/HomeworkTaskList.tsx";
import classes from './homeworkList.module.css'

const HomeworkList = () => {
    return (
        <>
            <section className={classes.homeworkList}>
                <div className="container">
                    <HomeworkHeader/>
                    <HomeworkHints/>
                    <HomeworkTaskList/>
                </div>

            </section>

        </>
    );
};

export default HomeworkList;