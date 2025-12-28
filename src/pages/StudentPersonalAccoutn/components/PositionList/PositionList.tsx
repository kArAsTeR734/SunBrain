import PositionItem from '../PositionItem/PositionItem.tsx';
import './positionList.scss';

const PositionList = () => {
  return (
    <>
      <div className='position__items'>
        <PositionItem />
      </div>
    </>
  );
};

export default PositionList;
