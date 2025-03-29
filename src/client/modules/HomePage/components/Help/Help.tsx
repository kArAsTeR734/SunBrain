import classes from './help.module.css'

const Help = () => {
    return (
        <section className={classes.help}>
            <div className="container">
                <div className={classes.helpWrapper}>
                    <div className={classes.helpDescription}>
                        <div className={classes.helpTitle}>Поддержка учителей на <br/> каждом этапе</div>
                        <div className={classes.helpSubtitle}>На нашей платформе учителя играют важную роль
                            в <br/> образовательном процессе.
                            За каждым педагогом закреплено определённое количество учеников, что позволяет следить за их
                            успеваемостью и прогрессом.
                            Учителя могут просматривать выполненные задания, оценивать их и оставлять полезные
                            комментарии.
                            Это не просто контроль — это персональная поддержка и советы, которые помогут каждому
                            ученику
                            лучше
                            понять материал и усовершенствовать свои знания.
                        </div>
                    </div>
                    <div className="helpImg">
                        <a href="#">
                            <img src="/src/client/modules/HomePage/assets/img/help/teacher.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

        </section>
    );
};

export default Help;