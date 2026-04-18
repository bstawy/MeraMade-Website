import Button from "../../../../components/Button/Button";

import styles from "../Collections.module.css";

const CollectionCard = ({ collection }) => {
  const isMainCollection = collection.id === 1;

  const cardStyle = {
    backgroundColor: collection.color,
    gridArea: `card-${collection.id}`,
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{collection.name}</h3>
        <span className={styles.cardIcon}>{collection.icon}</span>
      </div>
      <div className={styles.cardContent}>
        {isMainCollection && (
          <p className={styles.cardSubtitle}>{collection.description}</p>
        )}
        <Button label="Explore Collection" variant="text" size="sm" />
      </div>
    </div>
  );
};

export default CollectionCard;
