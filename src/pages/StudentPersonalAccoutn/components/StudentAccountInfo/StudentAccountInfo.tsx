import './studentAccountInfo.css';

const StudentAccountInfo = () => {
  return (
    <>
      <div className='general'>
        <h2 className='general__header'>Общая информация</h2>
        <div className='general__avatar'>
          <img
            className='general__avatar_img'
            src="/src/assets/avatar.jpeg"
            alt=""
          />
        </div>
        <div className='general__info'>
          <div className='general__info_item'>
            ФИО: Беляев Никита Николаевич
          </div>
          <div className='general__info_item'>
            Адрес электронной почты: example@mail.ru
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentAccountInfo;
