import styles from "./NavIconButton.module.css";

const NavIconButton = ({ icon }) => {
  return <div className={styles.icon}>{icon}</div>;
};

export default NavIconButton;
