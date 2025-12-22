import classes from './progressItem.module.css';

const ProgressItem = () => {
  return (
    <>
      <div className={classes.item}>
        <div className={classes.item_subject}>Математика</div>
        <div className={classes.progressContainer}>
          <div className={classes.progressValue}></div>
        </div>
      </div>
    </>
  );
};

export default ProgressItem;
