import PositionItem from '../PositionItem/PositionItem.tsx';
import classes from './positionList.module.css';

const PositionList = () => {
  return (
    <>
      <div className={classes.position__items}>
        <PositionItem />
      </div>
    </>
  );
};

export default PositionList;
