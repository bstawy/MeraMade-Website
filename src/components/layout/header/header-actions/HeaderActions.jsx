import CartIcon from "/src/assets/cart_icon.svg?react";
import LangIcon from "/src/assets/lang_icon.svg?react";
import ThemeIcon from "/src/assets/theme_icon.svg?react";

import { useTheme } from "../../../../context/ThemeContext";

import HeaderActionButton from "./HeaderActionButton";

import styles from "./HeaderActions.module.css";

const HeaderActions = () => {
  const { _, toggleTheme } = useTheme();

  return (
    <div className={styles.icons}>
      <HeaderActionButton icon={<LangIcon />} />
      <HeaderActionButton icon={<ThemeIcon />} onTap={toggleTheme} />
      <HeaderActionButton icon={<CartIcon />} />
    </div>
  );
};

export default HeaderActions;
