import styles from "./Error.module.scss";

import React from "react";

const Error = () => {
  return (
    <div className={styles.error}>
      <div className={styles.innerbox}>
        <h2>ERROR</h2>
        <h1>404</h1>
        <h3>OOPs ! PAGE NOT FOUND</h3>
        <p>
          Sorry ! The page you are looking for does not exist. If you think
          something is wrong report the problem
        </p>
      </div>
    </div>
  );
};

export default Error;
