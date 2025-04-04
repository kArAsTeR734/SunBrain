import classes from './calendarHeader.module.css'

const CalendarHeader = () => {
    return (
        <>
            <section className={classes.calendarHeader}>
                    <div className={classes.calendarHeader__links}>
                        <a className={classes.calendarHeader__link} href="#">Личный кабинет</a>
                    </div>
                    <div className={classes.calendarHeader__currentLink}>Календарь занятий</div>
            </section>
        </>
    );
};

export default CalendarHeader;