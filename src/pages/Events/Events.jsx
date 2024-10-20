// import React from 'react'
import styles from "./Eventstwo.module.scss";

import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className={styles.events}>
      <h1 className={styles.tittle}>OUR EVENTS</h1>
      <div className={styles.innerCont}>
        <div className={styles.firstRow}>
          <Link className={styles.link} to="/Events/Youth">
            <div className={styles.youth}>
              <div className={styles.pic}>
                <h2>YOUTH PARLIAMENT</h2>
              </div>
            </div>
          </Link>
          <Link className={styles.link} to="/Events/Mockmun">
            <div className={styles.mock}>
              <div className={styles.pic}>
                <h2>MOCK MUN</h2>
              </div>
            </div>
          </Link>
        </div>
        <Link className={styles.link} to="/Events/Annual">
          <div className={styles.annual}>
            <div className={styles.pic}>
              <h2>ANNUAL CONFERENCE</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Events;
