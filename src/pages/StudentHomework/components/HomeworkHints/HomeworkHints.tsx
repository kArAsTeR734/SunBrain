import classes from './homeworkHints.module.css';

const HomeworkHints = () => {
  return (
    <>
      <section className={classes.homework__hint__wrapper}>
        <div className={classes.homework__hint}>
          <div className={classes.homework__hint_img}>
            <img
              src="/src/assets/formulaHint.svg"
              alt=""
            />
            <span className={classes.homework__hint_number}>01</span>
          </div>
          <div className={classes.homework__hint_title}>
            Вспоминай формулы по каждой теме
          </div>
        </div>
        <div className={classes.homework__hint}>
          <div className={classes.homework__hint_img}>
            <img
              src="/src/assets/taskHint.svg"
              alt=""
            />
            <span className={classes.homework__hint_number}>02</span>
          </div>
          <div className={classes.homework__hint_title}>
            Решай новые задачи каждый день
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeworkHints;
