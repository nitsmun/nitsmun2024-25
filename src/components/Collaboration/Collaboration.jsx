import React from "react";
import styles from "./Collaboration.module.scss";

function Collaboration() {
  return (
    //Everything is inside the section with class container.
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.collaboration}>Collaboration</h1>
      </div>
      {/* <div className={styles.innerParent}>
        <div className={styles.items}>
          <p className={styles.colabtxt}>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore
              magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
              aliquid ex ea commodi consequatur? Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae
              consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
              pariatur?"
          </p>
          <div className={styles.colabimg}>
            <img
              src="https://res.cloudinary.com/dludtk5vz/image/upload/v1720186048/k3lcbdftkgre0xigoj1q.png"
              alt="side-img"
            />
          </div>
        </div>
      </div> */}
      <div className={styles.items}>
        <img
          className={styles.img}
          src="https://res.cloudinary.com/dfpklvfbt/image/upload/v1714153058/WhatsApp_Image_2024-04-24_at_11.50.50_PM_jrg8n3.jpg"
          alt="side-img"
        />

        <p className={styles.colabtxt}>
          <p>
            {" "}
            Collaboration with NIT Agartala MUN (NITAMUN): NIT Silchar MUN
            (NITSMUN) collaborated with NIT Agartala MUN (NITAMUN), facilitating
            the inaugural edition of the online NITAMUN on January 6th and 7th,
            2024. This collaboration provided participants with a platform for
            engaging in virtual Model United Nations sessions, fostering
            dialogue and learning in a digital environment.
          </p>
          <br />
          <p>
            Student Achievements: During the NIT Agartala MUN held on January
            6th and 7th, three students from the B.Tech 2026 batch, Bhaswar
            Agnivesh, Aalya Jain, and Mayurakhi Khaund, represented NIT Silchar
            with distinction. Bhaswar Agnivesh, from the ECE department,
            showcased outstanding performance, earning a High Commendation in
            UNGA DISEC. Similarly, Aalya Jain, also from the ECE Department,
            received a Verbal Mention in the UN Human Rights Council. Their
            success reflects NIT Silchar&apos;s commitment to excellence in the
            North East MUN circuit, bringing pride to our institution
          </p>
        </p>
      </div>
    </div>
  );
}

export default Collaboration;
