import classes from './homework.module.css'

const HomeworkHeader = () => {
    return (
        <>
            <section className={classes.homeworkHeader}>
                <div className={classes.homeworkHeader__links}>
                    <a className={classes.homeworkHeader__link} href="#">Личный кабинет</a>
                </div>
                <div className={classes.homeworkHeader__theme}>Тема 1. Геометрия на плоскости (планиметрия)</div>
            </section>
        </>
    );
};

export default HomeworkHeader;