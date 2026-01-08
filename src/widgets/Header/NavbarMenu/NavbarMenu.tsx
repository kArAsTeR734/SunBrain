import { NavLink } from 'react-router-dom';
import { navLinks } from '@/shared/constants/navbarLinks.ts';
import './NavbarMenu.scss'

const NavbarMenu = () => {

  return (
    <nav className="menu">
      {navLinks.map(({ label, href }) => (
        <li key={href} className="menu__item">
          <NavLink to={href}>{label}</NavLink>
        </li>
      ))}
    </nav>
  );
};

export default NavbarMenu;