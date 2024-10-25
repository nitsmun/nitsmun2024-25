import React from "react";
import styles from "./Firstone.module.scss";

const First = () => {
  return (
    <>
      <div className={styles.mainpage}>
        <div className={styles.tittle}>
          <h1>ANNUAL CONFERENCE</h1>
        </div>
        <div className={styles.content}>
          Step into a world where ideas dance, perspectives collide, and
          innovation takes center stage! We're thrilled to unveil the theme of
          our upcoming conference: 'Hues of Harmony'! Picture this as a vibrant
          canvas of ideas, perspectives, and talents colliding to create
          something extraordinary. It's like a lively painting where each color
          plays a crucial role. This isn't your typical conference, it's a
          fusion of minds, a celebration of diversity, and a journey into the
          art of collaboration. We're not just talking about it, we're living
          it! Join us for an adventure where every voice counts, connections
          spark, and brilliance shines. Are you ready to become a part of it?
          <br />
          <br />
          Step into the realm of strategy and security with the Intelligence
          Bureau (IB) Committee at NITSMUN Annual Conference 2024! Join us on a
          journey to analyze, plan, and safeguard important events, all in the
          mission to protect the country and its integrity. Your voice matters
          in addressing concerns and playing a pivotal role in ensuring
          security. Join the conference to contribute your perspective to the
          strategic discussions.
        </div>
      </div>

      <div className={styles.new}>
        <div className={styles.box}>
          <p>
            <div className={styles.text}>
              The "Special Council of Hastinapur" (Mahabharat) committee is
              designed to simulate pivotal diplomatic events from the
              Mahabharat, offering delegates a platform to navigate intricate
              political landscapes, forge alliances, and strategize for the
              kingdom of Hastinapur. Prepare for intense debates, historical
              intricacies, and an immersive diplomatic experience. Secure your
              spot, and let's write history together!
            </div>

            <div className={styles.text}>
              The United Nations Human Rights Council (UNHRC)"" committee is a
              cornerstone of intellectual discourse in the vibrant tapestry of
              Incandescence! This committee is crafted to emulate the dynamic
              realm of international diplomacy, where delegates will grapple
              with pressing human rights issues, engage in diplomatic maneuvers,
              and work towards collaborative solutions. Get ready for
              impassioned debates, diplomatic intricacies, and a profound
              exploration of global affairs. Embrace the opportunity to be a
              part of this consequential council, where your voice shapes the
              discourse on human rights. Secure your spot, and let the spirit of
              diplomacy illuminate the path to constructive resolutions.
              Together, let's embark on a journey to make a lasting impact on
              the world stage!
            </div>

            <div className={styles.text}>
              The International Press Corps(IPC) is a committee where people who
              love writing, taking pictures, and fair journalism come together.
              Each journalist is teamed up with a famous news agency and given
              the job of watching and reporting on debates in other committees.
              They have to capture interesting moments and send reports every
              day. And you know what's cool? It's not just serious stuff;
              there's a lot of fun too! Imagine enjoying the lively discussions
              on the house floor – journalism with a dose of fun!
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
              <p>(United Nations Human Resource Council)</p>
            </div>
          </div>

          <div className={styles.textbox}>
            <p>
              <span>Agenda:</span> Addressing the Ongoing Atrocities in
              Israel-Palestine with Main Focus On Violence Against Women and
              childern
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
              <h1>Sounak Sengupta</h1>
            </div>
            <p>
              Mr Sounak Sengupta as the Chairperson for Intelligence Bureau.
              Sounak Sengupta, a physics post graduate student, has been doing
              MUNs since 2018. Apart from his academic persuasions, he takes
              keen interest in debates and public speaking.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardtwo}`}>
            <div className={styles.head}>
              <div className={styles.img2}>
                <img src="" alt="" />
              </div>
              <h1>Prathmesh Repal</h1>
            </div>
            <p>
              Mr. Prathamesh Repal as the Chairperson for UNHRC. As he takes the
              helm as the Chairperson for the UNHRC simulation at NITS 2024, his
              passion for fostering a conducive and inclusive committee
              atmosphere shines through. He strives to uphold the essence of
              MUNs as a breeding ground for creative ideas and solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
