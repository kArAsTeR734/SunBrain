import PositionList from '../PositionList/PositionList.tsx';
import './studentAccountPosition.css';

const StudentAccountPosition = () => {
  return (
    <>
      <div className='position'>
        <div className='position__wrapper'>
          <div className='position__header'>
            Текущая позиция в рейтинге
          </div>
          <PositionList />
        </div>
      </div>
    </>
  );
};

export default StudentAccountPosition;
