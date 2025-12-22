import classes from './positionItem.module.css';

const PositionItem = () => {
  return (
    <>
      <div className={classes.position__item}>
        <div
          className={[classes.position__item_placement, classes.first].join(
            ' ',
          )}
        >
          1.
        </div>
        <div className={classes.position__item_info}>
          Иван Петрович Николаевич
        </div>
        <div className={classes.position__item_score}>90 баллов</div>
      </div>
      <div className={classes.position__item}>
        <div
          className={[classes.position__item_placement, classes.second].join(
            ' ',
          )}
        >
          2.
        </div>
        <div className={classes.position__item_info}>
          Петров Дмитрий сергеевич
        </div>
        <div className={classes.position__item_score}>88 баллов</div>
      </div>
      <div className={classes.position__item}>
        <div
          className={[classes.position__item_placement, classes.third].join(
            ' ',
          )}
        >
          3.
        </div>
        <div className={classes.position__item_info}>Иван Иванов Иванович</div>
        <div className={classes.position__item_score}>85 баллов</div>
      </div>
      <div className={classes.position__item}>
        <div className={classes.position__item_placement}>8.</div>
        <div className={classes.position__item_info}>
          Беляев Никита Николаевич
        </div>
        <div className={classes.position__item_score}>63 баллов</div>
      </div>
    </>
  );
};

export default PositionItem;
