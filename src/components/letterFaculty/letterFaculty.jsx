import React from "react";
import styles from "./letterFaculty.module.scss";

const letterFaculty = () => {
  return (
    <>
      <div className={styles.letter}>
        <h1 className={styles.header}>Letter from Faculty Advisor</h1>
        <div className={styles.content}>
          <p>
            Dear Delegates, and the Secretariat <br /> <br />
            Dear Delegates, Since its inception, NITSMUN has been dedicated to
            building a strong MUN environment in the college. I personally feel
            that their hard work and attention to detail are commmmendable. I've
            been connected to this club for quite sme time, and it has never
            disappointed me. I look forward to seeing it flourish even mare in
            the coming years. <br /> <br />
            This time, they are plasming an even grander three-day annual
            conference with three very exciting and unique committess. Hold
            under the banner of Incandescence 2024, NITSMUN is ready to welcome
            all MUNners and non-MUNners from across the country. <br /> <br />
            To everyone reading this, I encourage you to explore the website to
            learn more about this club and MUNs is general <br /> <br />
            Ware Regards <br />
            Dr. Wasim Arif <br />
            Facally Advan <br />
            NITS MUN
          </p>
        </div>
        <div className={styles.pic}></div>
      </div>
    </>
  );
};

export default letterFaculty;
