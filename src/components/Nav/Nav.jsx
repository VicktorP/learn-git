import { NavLink } from "react-router-dom";
import styleNav from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styleNav.nav}>
        <ul className={styleNav.nav__menu}>
          <li className={styleNav.nav__item}>
            <NavLink className={`${styleNav.nav__link} ${styleNav.item}`} activeClassName={styleNav.active} to="/profile">Profile</NavLink>
          </li>
          <li className={styleNav.nav__item}>
            <NavLink className={`${styleNav.nav__link} ${styleNav.item}`} activeClassName={styleNav.active} to="/dialogs">Messages</NavLink>
          </li>
          <li className={styleNav.nav__item}>
            <NavLink className={`${styleNav.nav__link} ${styleNav.item}`} activeClassName={styleNav.active} to="/news">News</NavLink>
          </li>
          <li className={styleNav.nav__item}>
            <NavLink className={`${styleNav.nav__link} ${styleNav.item}`} activeClassName={styleNav.active} to="/music">Music</NavLink>
          </li>
          <li className={styleNav.nav__item}>
            <NavLink className={`${styleNav.nav__link} ${styleNav.item}`} activeClassName={styleNav.active} to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;