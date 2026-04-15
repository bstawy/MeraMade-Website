import { useState } from "react";
import { useToggle } from "../../../../hooks/UseToggleHook";

import NavLinkItem from "./NavLinkItem";
import NavbarHamburgerMenu from "../hamburgerMenu/NavbarHamburgerMenu";

import styles from "../Navbar.module.css";

const NavbarLinks = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <>
      <nav className={`${isMenuOpen ? styles.mobileVisible : ""}`}>
        <ul>
          <NavLinkItem
            title="Our Story"
            path="/"
            isLinkHovered={isLinkHovered}
            setIsHovered={setIsLinkHovered}
            onTap={toggleMenu}
          />
          <NavLinkItem
            title="The Bakery"
            path="/bakery"
            isLinkHovered={isLinkHovered}
            setIsHovered={setIsLinkHovered}
            onTap={toggleMenu}
          />
          <NavLinkItem
            title="Events"
            path="/events"
            isLinkHovered={isLinkHovered}
            setIsHovered={setIsLinkHovered}
            onTap={toggleMenu}
          />
        </ul>
      </nav>
      <NavbarHamburgerMenu isOpen={isMenuOpen} toggleOpen={toggleMenu} />
    </>
  );
};

export default NavbarLinks;
