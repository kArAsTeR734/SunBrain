import {Link, NavLink} from "react-router-dom";
import headerClasses from './studentAccountHeader.module.css'
import Button from "../../../../shared/ui/Button/Button.tsx";
import buttonClasses from '../../../../shared/ui/Button/button.module.css'

const StudentAccountHeader = () => {
    return (
        <section className={headerClasses.header}>
            <div className="container">
                <header className={headerClasses.headerWrapper}>
                    <div className={headerClasses.headerLogo}>
                        <NavLink to="/" className={headerClasses.icon}>
                            <img src="/src/client/modules/HomePage/assets/icons/logo.svg" alt=""/>
                        </NavLink>
                        <Link to="/" className={headerClasses.logoName}>SunBrain</Link>
                    </div>
                    <nav className={headerClasses.menu}>
                        <li className={headerClasses.menu__item}>
                            <a href="/">О нас</a>
                        </li>
                        <li className={headerClasses.menu__item}>
                            <NavLink to="student/catalog">Примеры задач</NavLink>
                        </li>
                        <li className={headerClasses.menu__item}>
                            <NavLink to="/feedback">Отзывы</NavLink>
                        </li>
                        <li className={headerClasses.menu__item}>
                            <NavLink to="/contacts">Контакты</NavLink>
                        </li>
                    </nav>
                    <div className={headerClasses.header__profile}>
                        <button className={headerClasses.header__profile__item}>
                            <div className={headerClasses.header__profile__initials}>
                                <p>НБ</p>
                            </div>
                            <div className={headerClasses.header__profile__item__text}>
                                <p>Никита Беляев</p>
                            </div>
                        </button>
                        <div className="profile__dropdown-icon">
                            <img src="/src/client/modules/StudentPersonalAccoutn/assets/icons/chevron-down.svg" alt="accountIcon"/>
                        </div>
                    </div>
                </header>
                <div className={headerClasses.buttonWrapper}>
                    <Button
                        onClick={() => console.log('Hello World')}
                        className={buttonClasses.passEntranceTestBtnStudentAccount}>
                        Пройти вступительный тест
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default StudentAccountHeader;