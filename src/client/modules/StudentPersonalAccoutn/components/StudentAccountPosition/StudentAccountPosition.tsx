import PositionList from "../PositionList/PositionList.tsx";
import classes from './studentAccountPosition.module.css'

const StudentAccountPosition = () => {
    return (
        <>
            <div className={classes.position}>
                <div className={classes.position__wrapper}>
                    <div className={classes.position__header}>
                        Текущая позиция в рейтинге
                    </div>
                    <PositionList/>
                </div>
            </div>
        </>
    );
};

export default StudentAccountPosition;