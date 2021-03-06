import { NavLink } from "react-router-dom";

import { items } from "./items";

import styles from "./nav-bar-menu.module.scss";

const getActiveLink = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`
}

const NavBarMenu = () => {

    const menuItems = items.filter(item => item);

    const elements = menuItems.map(({ id, to, text }) => (
        <li key={id}>
            <NavLink to={to} className={getActiveLink}>{text}</NavLink>
        </li>
    ));

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
};

export default NavBarMenu;