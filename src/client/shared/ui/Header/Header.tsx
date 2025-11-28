import headerClasses from "./header.module.css";
import {Link, NavLink, useNavigate} from "react-router-dom";
import buttonClasses from '../../UI/Button/button.module.css'
import Button from "../Button/Button.tsx";

const Header = () => {
    const navigate = useNavigate();
    const navItems = [
        {label: 'О нас', href: '/'},
        {label: 'Примеры задач', href: '/catalog'},
        {label: 'Отзывы', href: '/feedback'},
        {label: 'Контакты', href: '/contacts'},
    ]

    return (
        <section className={headerClasses.header}>
            <div className="container">
                <header className={headerClasses.headerWrapper}>
                    <div className={headerClasses.headerLogo}>
                        <NavLink to="/" className={headerClasses.icon}>
                            <img src="../../../modules/HomePage/assets/icons/logo.svg" alt=""/>
                        </NavLink>
                        <Link to="/" className={headerClasses.logoName}>SunBrain</Link>
                    </div>
                    <nav className={headerClasses.menu}>
                        {navItems.map(({label, href}) => (
                            <li className={headerClasses.menu__item}>
                                <NavLink to={href}>{label}</NavLink>
                            </li>
                        ))}
                    </nav>
                    <Button onClick={() => navigate('/login')} className={buttonClasses.signInBtn}>Войти</Button>
                </header>
            </div>
        </section>
    );
};

export default Header;