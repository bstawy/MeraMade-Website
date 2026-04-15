import HeaderLogo from "./header-logo/HeaderLogo";
import Navbar from "../navbar/Navbar";
import HeaderActions from "./header-actions/HeaderActions";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderLogo />
      <Navbar />
      <HeaderActions />
    </div>
  );
};

export default Header;
