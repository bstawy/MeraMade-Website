import NavLinkItem from "./NavLinkItem";

import styles from "./NavLinks.module.css";

const NavLinks = ({ isMenuOpen, onTap, isLinkHovered, setIsLinkHovered }) => {
  return (
    <nav className={`${isMenuOpen ? styles.mobileVisible : ""}`}>
      <ul>
        <NavLinkItem
          title="Our Story"
          path="/"
          isLinkHovered={isLinkHovered}
          setIsHovered={setIsLinkHovered}
          onTap={onTap}
        />
        <NavLinkItem
          title="The Bakery"
          path="/bakery"
          isLinkHovered={isLinkHovered}
          setIsHovered={setIsLinkHovered}
          onTap={onTap}
        />
        <NavLinkItem
          title="Events"
          path="/e"
          isLinkHovered={isLinkHovered}
          setIsHovered={setIsLinkHovered}
          onTap={onTap}
        />
      </ul>
    </nav>
  );
};

export default NavLinks;
