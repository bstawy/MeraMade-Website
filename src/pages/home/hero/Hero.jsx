import MainText from "./main-text/MainText";
import Actions from "./actions/Actions";
import ScrollIndicator from "./scroll-indicator/ScrollIndicator";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>ARTISANAL EXCELLENCE</p>
        <MainText />
        <Actions />
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
