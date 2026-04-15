import { useState } from "react";
import { useToggle } from "../../../hooks/UseToggleHook";

import NavbarHamburgerMenu from "./hamburger-menu/NavbarHamburgerMenu";
import NavLinks from "./nav-links/NavLinks";

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <>
      <NavLinks
        isMenuOpen={isMenuOpen}
        onTap={toggleMenu}
        isLinkHovered={isLinkHovered}
        setIsLinkHovered={setIsLinkHovered}
      />
      <NavbarHamburgerMenu isOpen={isMenuOpen} toggleOpen={toggleMenu} />
    </>
  );
};

export default Navbar;
