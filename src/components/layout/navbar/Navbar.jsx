import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./navLinks/NavbarLinks";
import NavbarIcons from "./navActions/NavbarIcons";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavbarLogo />
      <NavbarLinks />
      <NavbarIcons />
    </div>
  );
};

export default Navbar;
