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
          After conducting numerous conferences, both online and offline, and
          hosting delegates from different schools and colleges from across the
          country, NITSMUN is all set for its conference scheduled to be held on
          the 12 and 13 March, 2022. Owing to the current situation, this
          conference will be conducted online, giving a chance to students from
          any nook and corner of the country or around the world to participate.
          We will be having three committees this year After conducting numerous
          conferences, both online and offline, and hosting delegates from
          different schools and colleges from across the country, NITSMUN is all
          set for its conference scheduled to be held on the 12 and 13 March,
          2022. Owing to the current situation, this conference will be
          conducted online, giving a chance to students from any nook and corner
          of the country or around the world to participate. We will be having
          three committees this year
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
