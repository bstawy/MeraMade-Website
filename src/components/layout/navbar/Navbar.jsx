import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./navLinks/NavbarLinks";
import NavbarHamburgerMenu from "./hamburgerMenu/NavbarHamburgerMenu";
import NavbarIcons from "./navActions/NavbarIcons";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavbarLogo />
      <NavbarLinks />
      <NavbarHamburgerMenu />
      <NavbarIcons />
    </div>
  );
};

export default Navbar;
