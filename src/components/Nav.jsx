import styleNav from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styleNav.nav}>
        <ul className={styleNav.nav__menu}>
          <li className={styleNav.nav__item}>
            <a className={`${styleNav.nav__link} ${styleNav.item}`} href="#s">Profile</a>
          </li>
          <li className={styleNav.nav__item}>
            <a className={`${styleNav.nav__link} ${styleNav.item}`} href="#s">Messages</a>
          </li>
          <li className={styleNav.nav__item}>
            <a className={`${styleNav.nav__link} ${styleNav.item}`} href="#s">News</a>
          </li>
          <li className={styleNav.nav__item}>
            <a className={`${styleNav.nav__link} ${styleNav.item}`} href="#s">Music</a>
          </li>
          <li className={styleNav.nav__item}>
            <a className={`${styleNav.nav__link} ${styleNav.item}`} href="#s">Settings</a>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;