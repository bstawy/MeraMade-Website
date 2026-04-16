import { useState } from "react";

import NavbarHamburgerMenu from "./hamburger-menu/NavbarHamburgerMenu";
import NavLinks from "./nav-links/NavLinks";

const Navbar = ({ isMenuOpen, onLinkTap }) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <>
      <NavLinks
        isMenuOpen={isMenuOpen}
        onTap={onLinkTap}
        isLinkHovered={isLinkHovered}
        setIsLinkHovered={setIsLinkHovered}
      />
      <NavbarHamburgerMenu isOpen={isMenuOpen} toggleOpen={onLinkTap} />
    </>
  );
};

export default Navbar;
