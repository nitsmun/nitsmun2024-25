import React from "react";
import styles from "./letterSec.module.scss";

const letterSec = () => {
  return (
    <>
      <div className={styles.lett}>
        <h1 className={styles.tittle}>Letter from Secretary General </h1>
        <div className={styles.body}>
          <p>
            Dear Delegates, respected Faculty Advisors, and the Secretariat{" "}
            <br /> <br />
            As the Secretary-General of NITSMUN, I am thrilled to share our
            vision and mission with you all. AI NITSMUN, are dedicated to
            fostering a culture of rational thinking and honing public speaking
            skills among our members.
            <br /> <br />
            Our aim is not only to simulate United Nations conferences but also
            to empower individuals with the ability to articulate their
            perspectives on global affairs. We believe that by mastering the art
            of diplomacy and public speaking, our members can become effective
            advocates for change in their communities and beyond.
            <br /> <br />
            {/* Furthermore, we are committed to building a vibrant MUNing culture in North Eastern India, By providing platfunns for dialogue, debate, and collaboration, we aspire to inspire the next generation of leaders and change-makers in the region.

                        <br /> <br /> */}
            On behalf of my Secretariat, I welcome you all on this journey of
            youthful explorations, solving critical concerns, and more
            importantly voicing your zeal for peace. Ending my envelope with a
            notion: it takes billions of pounds to stock the weapons, millions
            of lives to victimise in wars, thousands of soldiers to fight a
            battle, but only ane pen to hunch the harmony! <br />
            <br />
            Ware Regards <br />
            Ronak Jain <br />
            General Secretary <br />
            NITS MUN
          </p>
        </div>
        <div className={styles.img}></div>
      </div>
    </>
  );
};

export default letterSec;
