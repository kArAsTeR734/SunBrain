import classes from './catalogHint.module.css';

const CatalogHint = () => {
  return (
    <>
      <div className={classes.catalog__hint}>
        <div className={classes.catalog__hint_img}>
          <img
            src="/src/assets/formulaHint.svg"
            alt=""
          />
          <span className={classes.catalog__hint_number}>01</span>
        </div>
        <div className={classes.catalog__hint_title}>
          Вспоминай формулы по каждой теме
        </div>
      </div>
      <div className={classes.catalog__hint}>
        <div className={classes.catalog__hint_img}>
          <img
            src="/src/assets/taskHint.svg"
            alt=""
          />
          <span className={classes.catalog__hint_number}>02</span>
        </div>
        <div className={classes.catalog__hint_title}>
          Решай новые задачи каждый день
        </div>
      </div>
    </>
  );
};

export default CatalogHint;
