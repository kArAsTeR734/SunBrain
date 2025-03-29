import classes from "./studentAccountInfo.module.css";

const StudentAccountInfo = () => {
    return (
        <>
            <div className={classes.general}>
                <div className={classes.general__header}>
                    Общая информация
                </div>
                <div className={classes.general__avatar}>
                    <img className={classes.account__general__avatar_img}
                         src="/src/client/modules/StudentPersonalAccoutn/assets/img/avatar.jpeg"
                         alt=""/>
                </div>
                <div className={classes.general__info}>
                    <div className={classes.general__info_item}>ФИО: Беляев Никита Николаевич</div>
                    <div className={classes.general__info_item}>Возраст: 16</div>
                    <div className={classes.general__info_item}>Класс: 11</div>
                    <div className={classes.general__info_item}>Адрес электронной почты: example@mail.ru</div>
                    <div className={classes.general__info_item}>Школа: №140</div>
                </div>
            </div>
        </>
    );
};

export default StudentAccountInfo;