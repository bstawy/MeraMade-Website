import Button from "../../../../components/Button/Button";

import styles from "./Actions.module.css";

const Actions = () => {
  return (
    <div className={styles.actions}>
      <Button label="View Menu" />
      <Button label="Our Process" variant="ghost" />
    </div>
  );
};

export default Actions;
