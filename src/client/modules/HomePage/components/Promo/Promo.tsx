import classes from './promo.module.css'
import Button from "../../UI/Button/Button.tsx";
import buttonClasses from "../../UI/Button/button.module.css";

const Promo = () => {
    return (
        <section className={classes.promo}>
            <div className="container">
                <div className={classes.title}>
                    Твой личный путь к ЕГЭ – AI создаст план, а ты <br/> достигнешь цели!
                </div>
                <div className={classes.subtitle}>
                    Измените свои привычки в учебе с помощью индивидуальных идей <br/> искусственного интеллекта.
                </div>
                <div className={classes.actionButtons}>
                    <Button className={buttonClasses.passEntranceTestBtn}>Пройти вступительный тест</Button>
                    <Button className={buttonClasses.haveAnAccountBtn}>У меня уже есть аккаунт</Button>
                </div>
            </div>
        </section>
    );
};

export default Promo;