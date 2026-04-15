import styles from "./HeaderActions.module.css";

const HeaderActionButton = ({ icon, onTap }) => {
  return (
    <button type="button" onClick={onTap} className={styles.icon}>
      {icon}
    </button>
  );
};

export default HeaderActionButton;
