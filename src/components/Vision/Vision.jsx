import React from "react";

import { useEffect } from "react";
import styles from "./Vision.module.scss";

const Vision = () => {
  useEffect(() => {
    document.title = "NITSMUN | ABOUT US";
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imagebox}>
            <img
              src="https://res.cloudinary.com/dludtk5vz/image/upload/v1725286841/buqrjhjb11ilwgnegjgv.png"
              alt=""
            />
          </div>

          <div className={styles.textbox}>
            <h1 className={styles.heading}>OUR VISION</h1>

            <p className={styles.text}>
              The National Institute of Technology Model United Nations Club
              aims to empower students by providing a platform to enhance their
              understanding of global affairs, diplomacy, and leadership.
              Through engaging conferences and activities, we foster critical
              thinking, public speaking, and teamwork, preparing members for
              active participation in international discourse and promoting a
              sense of global citizenship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
