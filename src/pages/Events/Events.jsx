// import React from 'react'
import styles from "./Eventstwo.module.scss";

import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  useEffect(() => {
    document.title = "NITSMUN | EVENTS";
  }, []);
  return (
    <div className={styles.eventsParent}>
      <div className={styles.events}>
        <h1 className={styles.tittle}>OUR EVENTS</h1>
        <div className={styles.innerCont}>
          <div className={styles.firstRow}>
            <Link className={styles.link} to="/events/youth">
              <div className={`${styles.youth} ${styles.card}`}>
                <div className={styles.pic}>
                  <h2>YOUTH PARLIAMENT</h2>
                </div>
              </div>
            </Link>
            <Link className={styles.link} to="/events/mockmun">
              <div className={`${styles.mock} ${styles.card}`}>
                <div className={styles.pic}>
                  <h2>MOCK MUN</h2>
                </div>
              </div>
            </Link>
          </div>
          <Link className={styles.link} to="/events/annual">
            <div className={`${styles.annual} ${styles.card}`}>
              <div className={styles.pic}>
                <h2>ANNUAL CONFERENCE</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
