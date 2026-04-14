import NavIconButton from "./NavIconButton";

import CartIcon from "/src/assets/cart_icon.svg?react";
import LangIcon from "/src/assets/lang_icon.svg?react";
import ThemeIcon from "/src/assets/theme_icon.svg?react";

import styles from "../Navbar.module.css";

const NavbarIcons = () => {
  return (
    <div className={styles.icons}>
      <NavIconButton icon={<LangIcon />} />
      <NavIconButton icon={<ThemeIcon />} />
      <NavIconButton icon={<CartIcon />} />
    </div>
  );
};

export default NavbarIcons;
