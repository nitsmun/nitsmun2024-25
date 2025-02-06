import React from "react";
import styles from "./Objective.module.scss"; // Corrected import statement

const Objective = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.objhead}>OUR OBJECTIVES</div>
        <div className={styles.objpara}>
          <p className={styles.parag}>
            NITSMUN aspires to involve youth in international dialogue,
            deliberate upon the dire issues of the world and shape them into
            strong individuals who'll become the leaders of tomorrow.
            International Model United Nations (IMUN) brings youth together from
            around the world to learn and share ideas from a diverse set of
            experiences and backgrounds where the Executive board, International
            Press and International Delegates consolidate to learn about
            diplomacy, international relations, and the United Nations
            International Model United Nations (IMUN) brings youth together from
            around the world to learn and share ideas from a diverse set of
            experiences and backgrounds where the Executive board, International
            Press and International Delegates consolidate to learn about
            diplomacy, international relations, and the United Nations
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.objpic}>
          <img
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1724076688/niafmjwi2w9zeub0mdqs.png"
            alt="objectiveimage"
          />
        </div>
      </div>
    </div>
  );
};

export default Objective;
