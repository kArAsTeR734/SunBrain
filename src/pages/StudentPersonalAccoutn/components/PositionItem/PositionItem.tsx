import './positionItem.css';
import clsx from "clsx";

const PositionItem = () => {
  return (
    <>
      <div className='position__item'>
        <div
          className={clsx('position__item-placement', 'first')}
        >
          1.
        </div>
        <p className='position__item-info'>
          Иван Петрович Николаевич
        </p>
        <p className='position__item-score'>90 баллов</p>
      </div>
      <div className='position__item'>
        <div
            className={clsx('position__item-placement', 'second')}
        >
          2.
        </div>
        <div className='position__item-info'>
          Петров Дмитрий сергеевич
        </div>
        <div className='position__item-score'>88 баллов</div>
      </div>
      <div className='position__item'>
        <div
            className={clsx('position__item-placement', 'third')}
        >
          3.
        </div>
        <div className='position__item-info'>Иван Иванов Иванович</div>
        <div className='position__item-score'>85 баллов</div>
      </div>
      <div className='position__item'>
        <div className={clsx('position__item-placement')}>8.</div>
        <div className='position__item-info'>
          Беляев Никита Николаевич
        </div>
        <div className='position__item-score'>63 баллов</div>
      </div>
    </>
  );
};

export default PositionItem;
