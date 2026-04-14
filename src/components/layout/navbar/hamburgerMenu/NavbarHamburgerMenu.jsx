import { useToggle } from "../../../../hooks/useToggleHook";
import styles from "./NavbarHamburgerMenu.module.css";

const NavbarHamburgerMenu = () => {
  const [isOpen, toggleOpen] = useToggle();

  return (
    <button
      type="button"
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
      onClick={toggleOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default NavbarHamburgerMenu;
