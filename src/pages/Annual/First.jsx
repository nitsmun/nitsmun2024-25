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
          Step into a world where ideas fight, perspectives collide, and diplomacy thrives.
          We are thrilled to unveil the theme of our upcoming annual conference, 'Democracy Nexus'!
          This isn't a typical conference; it is a symphony of budding minds coming together to create something extraordinary. The conference will bring together young, promising minds to debate, discuss, and brainstorm ideas to solve the challenges that have wreaked havoc on our world.
          So, join us on a journey where you will be seated in positions of power, and your decisions will impact the lives of millions.
          It's a journey that you don’t want to miss!
        </div>
      </div>

      <div className={styles.new}>
        <div className={styles.box}>
          <p>
            <div className={styles.text}>
              Step into the United Nations High Commissioner for Refugees (UNHCR), where every decision shapes the fate of those caught in a web of uncertainty. Amidst the tangled realities of displacement—woven with conflict, persecution, and disaster—millions seek a path to safety, dignity, and hope.
              As a delegate, you will navigate this maze of compassion and crisis, working to ensure protection, dignity, and hope for those who need it most.

              Will you rise above the chaos to craft solutions that ensure safety and a future for those lost in the labyrinth of conflict? The UNHCR calls upon you to lead with compassion and clarity.
            </div>

            <div className={styles.text}>
              Enter the United Nations Security Council (UNSC), where the world’s most critical issues converge in a maze of diplomacy and power. In this world of shifting alliances and concealed threats, every word you speak and every move you make can unravel chaos or weave clarity. As you navigate the intricate paths of global conflict, political unrest, and fragile peace, your decisions will echo far beyond the chamber.

              Will you find your way through the labyrinth of diplomacy to foster clarity and resolution, or be lost in its complexities? The UNSC awaits your voice.

            </div>
            <div className={styles.text}>
              In the intricate web of global power and diplomacy, where secrets are the ultimate currency and alliances hang by a thread, we introduce the Marvel Global Security Council. This elite committee will test your ability to navigate a world of complex challenges, hidden agendas, and shifting loyalties.

              Step into a realm of uncertainty and intrigue, where every decision carries weight and every ally may become a foe.

              Will you unravel the chaos to secure peace, or will you lose yourself in its endless twists? The path is yours to shape—prepare to confront the unknown.
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

      {/* <div className={styles.container}>
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
      </div> */}

      {/* <div className={styles.executive}>
        <h1 className={styles.textEx}>COMMITEES</h1>
        <div className={styles.commiteeParent}>
          <div className={styles.commiteeCont}>
            <div className={styles.leftImgCont}>
              image
            </div>
            <div className={styles.rightTextCont}>
              <p>hello</p>
              <a>Background Guide</a>
            </div>
          </div>
          <div className={styles.commiteeCont}>
            <div className={styles.leftImgCont}>
              image
            </div>
            <div className={styles.rightTextCont}>
              <p>hello</p>
              <a>Background Guide</a>
            </div>
          </div>
          <div className={styles.commiteeCont}>
            <div className={styles.leftImgCont}>
              image
            </div>
            <div className={styles.rightTextCont}>
              <p>hello</p>
              <a>Background Guide</a>
            </div>
          </div>
          <div className={styles.commiteeCont}>
            <div className={styles.leftImgCont}>
              image
            </div>
            <div className={styles.rightTextCont}>
              <p>hello</p>
              <a>Background Guide</a>
            </div>
          </div>
        </div>
      </div> */}
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
