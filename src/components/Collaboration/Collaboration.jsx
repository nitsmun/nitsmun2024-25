import React from "react";
import styles from "./Collaboration.module.scss";

function Collaboration() {
  return (
    //Everything is inside the section with class container.
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.collaboration}>Collaboration</h1>
      </div>

      <div className={styles.items}>
        <div className={styles.colabtxt}>
          <p>
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
        </div>
        <div className={styles.colabimg}>
          <img
            src="https://res.cloudinary.com/dludtk5vz/image/upload/v1720186048/k3lcbdftkgre0xigoj1q.png"
            alt="side-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Collaboration;
