import { NavLink } from "react-router-dom";

import styles from "./NavLinks.module.css";

const NavLinkItem = ({ title, path, isLinkHovered, setIsHovered, onTap }) => {
  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive && !isLinkHovered ? styles.active : ""
        }
        onClick={onTap}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default NavLinkItem;
