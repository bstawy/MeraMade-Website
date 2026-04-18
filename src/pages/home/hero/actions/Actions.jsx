import ArrowIcon from "/src/assets/arrow_v1_icon.svg?react";

import Button from "../../../../components/Button/Button";

import styles from "./Actions.module.css";

const Actions = () => {
  return (
    <div className={styles.actions}>
      <Button label="View Menu" icon={<ArrowIcon />} />
      <Button label="Our Process" variant="ghost" />
    </div>
  );
};

export default Actions;
