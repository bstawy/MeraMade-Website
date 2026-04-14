import styles from "../Navbar.module.css";

const NavbarLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home" className={styles.navItem}>
            Our Story
          </a>
        </li>
        <li>
          {" "}
          <a href="#home" className={styles.navItem}>
            The Bakery
          </a>
        </li>
        <li>
          <a href="#home" className={styles.navItem}>
            Events
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLinks;
