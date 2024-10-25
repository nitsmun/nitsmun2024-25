import React from "react";
import styles from "./Mockmunone.module.scss";
import { Footer } from "../../components";
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
          We will be having three committees this year
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

      <div className={styles.executive}>
        <h1 className={styles.textEx}>EXECUTIVE BOARD</h1>

        <div className={styles.cardbody}>
          <div className={styles.card}>
            <div className={styles.head}>
              <div className={styles.img1}>{/* <img src="" alt="" /> */}</div>
              <h1>MAYURAKHI KHAUND</h1>
            </div>
            <p>
              Hey! I am Mayurakhi Khaund. I am 2nd year Civil Undergraduate
              student at NITS. Also, I work as a content writer and as a
              marketing executive for various clubs. MUN has always been
              something that intrigues me and it's just an incredible platform
              to furnish skills in an individual. I am really grateful to
              NITSMUN for giving me the opportunity to participate and organise
              amazing conferences and now, to chair one! Looking forward to
              creating unforgettable memories in here. See you at the next
              upcoming session!
            </p>
          </div>
          {/* <div className={`${styles.card} ${styles.cardtwo}`}>
            <div className={styles.head}>
              <div className={styles.img2}>
                <img src="" alt="" />
              </div>
              <h1>Username</h1>
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Mockmun;
