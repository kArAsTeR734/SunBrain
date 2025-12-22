import headerClasses from './header.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from '../../shared/ui/Button/Button.tsx';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const navItems = [
    { label: 'О нас', href: '/' },
    { label: 'Каталог задач', href: '/student/catalog' },
    { label: 'Календарь', href: '/student/calendar' },
    { label: 'Отзывы', href: '/feedback' },
  ];
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <section className={headerClasses.header}>
      <div className="container">
        <header className={headerClasses.headerWrapper}>
          <div className={headerClasses.headerLogo}>
            <NavLink to="/" className={headerClasses.icon}>
              <img
                src="/src/assets/logo.svg"
                alt=""
              />
            </NavLink>
            <Link to="/" className={headerClasses.logoName}>
              SunBrain
            </Link>
          </div>
          <nav className={headerClasses.menu}>
            {navItems.map(({ label, href }) => (
              <li key={href} className={headerClasses.menu__item}>
                <NavLink to={href}>{label}</NavLink>
              </li>
            ))}
          </nav>
          {!isLoggedIn ? (
            <Button
              onClick={() => navigate('/login')}
              className='button button__sign-in'
            >
              Войти
            </Button>
          ) : (
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
                <img
                  src="/src/assets/chevron-down.svg"
                  alt="accountIcon"
                />
              </div>
            </div>
          )}
        </header>
      </div>
    </section>
  );
};

export default Header;
