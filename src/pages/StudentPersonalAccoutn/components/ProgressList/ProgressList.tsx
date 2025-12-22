import classes from './progressList.module.css';
import ProgressItem from '../ProgressItem/ProgressItem.tsx';

const ProgressList = () => {
  return (
    <>
      <div className={classes.items}>
        <ProgressItem />
      </div>
    </>
  );
};

export default ProgressList;
