import classes from './homeworkItem.module.css'

const HomeworkItem = () => {
    return (
        <>
            <div className={classes.homework__task}>
                <div className={classes.homework__task__header}>
                    <div>
                        <span className={classes.homework__task__number}>Задача 1</span>
                    </div>
                </div>
                <div className={classes.homework__task__text}>
                    <p className={classes.homework__task__description}>В треугольнике ABC известно, что ∠B = 73, AB =
                        BC. Найдите ∠C. Ответ дайте в градусах.
                    </p>
                    <div className={classes.homework__task__image}>
                        <img src="/src/client/modules/StudentHomework/img/task1.png" alt=""/>
                    </div>

                </div>
                <div className={classes.homework__task__solution}>
                    <div className={classes.homework__task__solution_header}>
                        Показать ответ и решение
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeworkItem;