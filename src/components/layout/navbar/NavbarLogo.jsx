import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const NavbarLogo = () => {
  return (
    <NavLink to="/" className={styles.logo}>
      MeraMade
    </NavLink>
  );
};

export default NavbarLogo;
