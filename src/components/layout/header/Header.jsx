import { useToggle } from "../../../hooks/useToggleHook";

import HeaderLogo from "./header-logo/HeaderLogo";
import Navbar from "../navbar/Navbar";
import HeaderActions from "./header-actions/HeaderActions";

import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle();

  return (
    <div className={styles.header}>
      <HeaderLogo />
      <Navbar isMenuOpen={isMenuOpen} onLinkTap={toggleMenu} />
      <HeaderActions isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Header;
