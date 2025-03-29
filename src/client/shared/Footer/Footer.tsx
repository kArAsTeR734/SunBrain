import classes from './footer.module.css'

const Footer = () => {
    return (
        <section className={classes.footer}>
            <div className="container">
                <a href="#">
                    <img src="/src/client/modules/HomePage/assets/icons/logo.svg" alt="logo"/>
                </a>
                <div className={classes.footerWrapper}>
                    <div className="about">
                        <div className={classes.footerHeader}>
                            О SunBrain
                        </div>
                        <div className={classes.footerItem}>
                            <a className={classes.footerLink} href="#">Отзывы</a>
                        </div>
                        <div className={classes.footerItem}>
                            <a className={classes.footerLink} href="#">Контакты</a>
                        </div>
                        <div className={classes.footerItem}>
                            <a className={classes.footerLink} href="#">Обратная связь</a>
                        </div>
                    </div>
                    <div className="study">
                        <div className={classes.footerHeader}>
                            Учеба в SunBrain
                        </div>
                        <div className={classes.footerItem}>
                            <a className={classes.footerLink} href="#">Курсы</a>
                        </div>
                        <div className={classes.footerItem}>
                            <a className={classes.footerLink} href="#">Подготовка к ЕГЭ</a>
                        </div>
                        <div className={classes.footerItem}>
                            <a className={classes.footerLink} href="#">Пробный тест</a>
                        </div>
                    </div>
                    <div className="contacts">
                        <div className={classes.footerHeader}>Свяжитесь с нами</div>
                        <a href="tel:+88003020412" className={classes.footerLink}>+7 (499) 922-89-74</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;