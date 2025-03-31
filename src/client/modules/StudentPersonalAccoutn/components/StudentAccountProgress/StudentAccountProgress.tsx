import classes from './studentAccountProgress.module.css'
import ProgressList from "../ProgressList/ProgressList.tsx";

const StudentAccountProgress = () => {
    return (
        <>
            <div className={classes.progress}>
                <h2 className={classes.progress__header}>
                    Прогресс обучения
                </h2>
                <ProgressList/>
            </div>
        </>
    );
};

export default StudentAccountProgress;