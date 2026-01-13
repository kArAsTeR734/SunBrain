import './calendarHeader.css';

const CalendarHeader = () => {
  return (
    <>
      <section className='calendar-header'>
        <div className='calendar-header__links'>
          <a className='calendar-header__links-link'
             href="#">
            Личный кабинет
          </a>
        </div>
        <div className='calendar-header__links-link'>
          Календарь занятий
        </div>
      </section>
    </>
  );
};

export default CalendarHeader;
