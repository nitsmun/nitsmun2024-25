import React from "react";
import styles from "./Objective.module.scss"; // Corrected import statement

const Objective = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.objhead}>OUR OBJECTIVES</div>
        <div className={styles.objpara}>
          <p className={styles.parag}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quia similique facilis fugiat ut officiis, tempora quibusdam cumque
            enim quod unde? Molestias nostrum neque inventor quos mollitia
            commodi sunt iusto rerum similique consequatur illo explicabo!
            Dolorum molestiae voluptatum, placeat ad sed natus, non, aspernatur
            ipsam aliquid voluptate iure laudantium molestias. Sint expedita,
            molestiae magni officia vero atque quo mollitia deleniti impedit ut!
            Tempora expedita illo qui autem nostrum, recusandae alias natus
            ratione sit aperiam, veniam non nesciunt pariatur, totam earum
            cumque soluta ipsum! Quae obcaecati assumenda ad?
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
