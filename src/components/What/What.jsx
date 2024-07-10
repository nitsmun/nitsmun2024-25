import React from "react";
import styles from "./What.module.scss";
const What = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headtxt}>What is</h1>
      <div className={styles.txtsctn}>
        <h1 className={styles.muntxt}>NITS MUN</h1>
        <p>
          NITSMUN, the National Institute of Technology Model United Nations
          Club, is a dynamic platform cultivating global leaders. Committed to
          fostering diplomacy, critical thinking, and public speaking, NITSMUN
          provides students with opportunities to engage in enriching
          discussions, simulations, and conferences, shaping informed and
          empowered individuals for active participation in
          international affairs
        </p>
        <button className={styles.abtbtn}>About</button>
      </div>
    </div>
  );
};
export default What;
