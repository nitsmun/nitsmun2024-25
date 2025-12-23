import React from "react";
import styles from "./Collaboration.module.scss";

function Collaboration() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.collaboration}>Collaboration</h1>
      </div>

      <div className={styles.items}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src="https://res.cloudinary.com/dfpklvfbt/image/upload/v1714153058/WhatsApp_Image_2024-04-24_at_11.50.50_PM_jrg8n3.jpg"
            alt="Collaboration session"
          />
        </div>

        <div className={styles.colabtxt}>
          <div>
            <p>
              <strong>Collaboration with NIT Agartala MUN (NITAMUN):</strong>{" "}
              NIT Silchar MUN (NITSMUN) collaborated with NIT Agartala MUN
              (NITAMUN), facilitating the inaugural edition of the online
              NITAMUN on January 6th and 7th, 2024. This collaboration provided
              participants with a platform for engaging in virtual Model United
              Nations sessions, fostering dialogue and learning in a digital
              environment.
            </p>
            <br />
            <p>
              <strong>Student Achievements:</strong> During the NIT Agartala MUN
              held on January 6th and 7th, three students from the B.Tech 2026
              batch represented NIT Silchar with distinction. Bhaswar Agnivesh
              (ECE) earned a High Commendation in UNGA DISEC, and Aalya Jain
              (ECE) received a Verbal Mention in the UN Human Rights Council.
              Their success reflects NIT Silchar's commitment to excellence in
              the circuit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaboration;
