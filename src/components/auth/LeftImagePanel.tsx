import pawImage from "../../assets/paw.png";
import pawImage2 from "../../assets/paw2.png";
import cat1 from "../../assets/cats/cat.png";
import cat2 from "../../assets/cats/cat2.png";
import cat3 from "../../assets/cats/cat3.png";
import cat4 from "../../assets/cats/cat4.png";
import styles from "./LeftImagePanel.module.css";

const CARD_CLASS_NAMES = [
  'imageCardTopLeft',
  'imageCardTopRight',
  'imageCardBottomLeft',
  'imageCardBottomRight',
];

const LeftImagePanel = () => {
  // Cat images for the 4 cards
  const images = [cat1, cat2, cat3, cat4];

  return (
    <div className={styles.container}>
      {/* Decorative Paw - Top Left */}
      <img
        src={pawImage}
        alt="Paw"
        className={`${styles.paw} ${styles.pawLeft}`}
      />

      {/* Decorative Paw - Bottom Right */}
      <img
        src={pawImage2}
        alt="Paw"
        className={`${styles.paw} ${styles.pawRight}`}
      />

      {/* Main Frame Container */}
      <div className={styles.frameContainer}>
        {/* Gradient Background */}
        <div className={styles.gradientBg} />

        {/* Border Layers */}
        <div className={styles.borderLayer} />
        <div className={styles.borderLayer} />

        {/* Grid Container for 4 Image Cards */}
        <div className={styles.gridContainer}>
          {images.map((src, index) => (
            <div key={index} className={styles[CARD_CLASS_NAMES[index]]}>
              <img src={src} alt={`Cat ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className={styles.copyright}>© 2025 Cat Hotel by RR</p>
    </div>
  );
};

export default LeftImagePanel;
