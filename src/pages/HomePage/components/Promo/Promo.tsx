import classes from './promo.module.css';
import '../../../../shared/ui/Button/button.css'
import clsx from "clsx";
import Button from "../../../../shared/ui/Button/Button.tsx";

const Promo = () => {
  return (
    <section className={classes.promo}>
      <div className="container">
        <div className={classes.title}>
          Твой личный путь к ЕГЭ – AI создаст план, а ты <br /> достигнешь цели!
        </div>
        <div className={classes.subtitle}>
          Измените свои привычки в учебе с помощью индивидуальных идей <br />{' '}
          искусственного интеллекта.
        </div>
        <div className={classes.actionButtons}>
          <Button className={clsx('button', 'button__pass-test')}>
            Пройти вступительный тест
          </Button>
          <Button className={clsx('button', 'button__have-account')}>
            У меня уже есть аккаунт
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Promo;
