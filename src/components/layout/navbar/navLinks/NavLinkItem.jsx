import { NavLink } from "react-router-dom";
import styles from "../Navbar.module.css";

const NavLinkItem = ({ title, path }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default NavLinkItem;
