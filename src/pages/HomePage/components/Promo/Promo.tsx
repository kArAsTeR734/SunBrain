import classes from './promo.module.css';
import '../../../../shared/ui/Button/button.css'
import clsx from "clsx";
import Button from "../../../../shared/ui/Button/Button.tsx";
import {useNavigate} from "react-router-dom";

const Promo = () => {
  const navigate = useNavigate();

  const handleClickTest = () => {
    navigate('/test');
  }

  const handleClickAccount = () => {
    navigate('login');
  }
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
          <Button className={clsx('button', 'button__pass-test')}
          onClick={handleClickTest}
          >
            Пройти вступительный тест
          </Button>
          <Button className={clsx('button', 'button__have-account')}
          onClick={handleClickAccount}
          >
            У меня уже есть аккаунт
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Promo;
