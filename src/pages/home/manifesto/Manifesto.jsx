import WheatGrainIcon from "/src/assets/grain_wheat_icon.svg?react";

import Eyebrow from "../../../components/Eyebrow";

import styles from "./Manifesto.module.css";

const Manifesto = () => {
  return (
    <section id="manifesto" className={styles.manifestoSection}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <WheatGrainIcon />
        </div>
        <div className={styles.wheatCard}>
          <span className={styles.wheatCard__percent}>100%</span>
          <span className={styles.wheatCard__title}>ORGANIC FLOUR</span>
        </div>
      </div>
      <div className={styles.content}>
        <Eyebrow text="OUR MANIFESTO" />
        <h2 className={styles.title}>Crafted for the Nocturnal Artisan.</h2>
        <p className={styles.description}>
          We believe that the best things in life require time. In our atelier,
          the world slows down. We don't chase efficiency; we chase the perfect
          crust, the most aerated crumb, and the soul of the grain.
        </p>
        <div className={styles.journeyTitle}>
          <Eyebrow text="THE NOCTURNAL JOURNEY" />
        </div>
        <i className={styles.journeyDescription}>
          "While the city sleeps, the ovens breathe. We are the keepers of the
          sourdough ritual."
        </i>
      </div>
    </section>
  );
};

export default Manifesto;
