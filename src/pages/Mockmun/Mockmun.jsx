import React from "react";
import styles from "./Mockmunone.module.scss";
// import { Footer } from "../../components";
// import ExecutiveBoard from "./ExecutiveBoard";
const Mockmun = () => {
  return (
    <>
      <div className={styles.mainpage}>
        <div className={styles.tittle}>
          <h1>MOCK MUN</h1>
        </div>
        <div className={styles.content}>
          NITS MUN proudly presents Mock MUN 2025 on 1st February 2025, a
          preparatory event for the Incandescence Annual MUN Conference 2025.
          This practice session will help delegates refine their diplomatic
          skills, understand MUN procedures, and boost confidence in public
          speaking. Why Attend? Gain hands-on experience with MUN proceedings.
          Improve research, diplomacy, and speaking skills. Network with
          like-minded individuals. Receive constructive feedback from
          experienced MUNers. The Incandescence Annual MUN Conference 2025 will
          feature four committees, offering diverse and engaging discussions on
          global issues. Join us for an enriching experience and prepare for the
          main event.
        </div>
      </div>

      <div className={styles.new}>
        <div className={styles.box}>
          <p>
            <div className={styles.text}>
              UNSC (United Nations Security Council), with the agenda “The
              Occupation of major water ways for strong military presence
              overseas and it&pos;s impact on overseas trade.”
            </div>

            <div className={styles.text}>
              UNEP (United Nations Environment Programme), with the agenda
              “Eliminating the domestic and international trafficking and
              illegal trade of wildlife ”.
            </div>

            <div className={styles.text}>
              IPC (International Press Corps) which will allow participants to
              act as unbiased journalists, reporting on the proceedings of each
              simulation in the Conference. They will get a chance to
              investigate committee debates, conduct interviews, edit articles,
              and cover press conferences. "If you prefer writing over speaking,
              be a member of the International Press and keep a check on the
              delegates!"
            </div>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.textCom}>Commitees</h1>

        <section className={styles.mainsectn}>
          <div className={styles.imgbox}>
            <div className={styles.heading}>
              <h1>UNHRC</h1>
              <p>(United Nations Security Council)</p>
            </div>
          </div>

          <div className={styles.textbox}>
            <p>
              <span>Agenda:</span> Addressing State-Sponsored terrorism:
              examining allegations and promoting regional stability in Asia
              with special emphasis on Afghanistan, Pakistan and Syria. The
              United Nations Security Council maintains global peace, with 15
              member nations addressing threats through resolutions,sanctions,
              and peacekeeping operations,aiming for collective security.
            </p>

            <button className={styles.btn}>Background Guide</button>
          </div>
        </section>
      </div>

      {/*       <ExecutiveBoard /> */}
    </>
  );
};

export default Mockmun;
