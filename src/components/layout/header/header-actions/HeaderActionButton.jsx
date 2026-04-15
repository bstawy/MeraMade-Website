import styles from "./HeaderActions.module.css";

const HeaderActionButton = ({ icon }) => {
  return <div className={styles.icon}>{icon}</div>;
};

export default HeaderActionButton;
