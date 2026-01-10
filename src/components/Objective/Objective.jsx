import React from "react";
import styles from "./Objective.module.scss"; // Corrected import statement

const Objective = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.objhead}>OUR OBJECTIVES</div>
        <div className={styles.objpara}>
          <p className={styles.parag}>
            True to the spirit of the United Nations, NITSMUN strives to provide
            a structured platform for open dialogue on complex national and
            international issues. At NITSMUN, we want to spark ideas, amplify
            voices, and help shape leaders who aren't afraid to tackle the
            toughest problems. We're here to create a space where young people
            can learn to communicate ideas, speak without fear, and make hard
            decisions. We believe that thoughtful discussion can change things.
            Through realistic simulations of how global decisions are made,
            NITSMUN helps students think critically, lead ethically, and build a
            deeper understanding of diplomacy and international affairs. By
            bringing together people with different viewpoints, we're trying to
            build a community that values teamwork, resilience, and taking
            responsibility for our shared world preparing delegates not just to
            join important conversations, but to drive them forward.
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
