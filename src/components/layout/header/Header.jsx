import { useRef, useCallback } from "react";
import { useToggle } from "../../../hooks/useToggleHook";
import { useClickOutside } from "../../../hooks/useClickOutsideHook"; // Your new hook

import HeaderLogo from "./header-logo/HeaderLogo";
import Navbar from "../navbar/Navbar";
import HeaderActions from "./header-actions/HeaderActions";

import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const headerRef = useRef(null);

  // Use useCallback to prevent unnecessary hook re-runs.
  // We check 'isMenuOpen' to ensure we only toggle when the menu is actually active.
  const closeMenu = useCallback(() => {
    if (isMenuOpen) {
      toggleMenu();
    }
  }, [isMenuOpen, toggleMenu]);

  // Apply the hook to the header container
  useClickOutside(headerRef, closeMenu);

  return (
    <div className={styles.header} ref={headerRef}>
      <HeaderLogo />
      <Navbar isMenuOpen={isMenuOpen} onLinkTap={toggleMenu} />
      <HeaderActions isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Header;
