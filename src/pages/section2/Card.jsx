/* eslint-disable react/prop-types */
import styles from "./index.module.css";

const Card = ({ svg, heading, text }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["img-container"]}>
        <img src={svg} />
      </div>
      <div className={styles["text-container"]}>
        <h2>{heading}</h2>
        <p className="mt-3">{text}</p>
      </div>
    </div>
  );
};

export default Card;
