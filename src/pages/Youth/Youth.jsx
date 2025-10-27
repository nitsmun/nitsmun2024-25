import React from "react";
import styles from "./Youthone.module.scss";
import { useNavigate } from "react-router-dom";

const Youth = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.parent}>
      <div className={styles.banner}>
        <img
          src="https://res.cloudinary.com/dffke2hbp/image/upload/v1729797741/xgjiwhxazlyvjydghbtw.jpg"
          alt=""
        />
      </div>
      <div className={styles.mainpage}>
        <div className={styles.tittle}>
          <h1>YOUTH PARLIAMENT</h1>
        </div>
        <div className={styles.content}>
          <strong>Ignite Change at NITSMUN Youth Parliament 2024! </strong>
          <br />
          Gear up for an electrifying day of debate, exchange, and empowerment
          on October 26, 2024. The NITSMUN Youth Parliament invites you to dive
          into impactful discussions on Uniform Civil Code (UCC) and Waqf—issues
          that shape justice, equality, and unity in our country.
          <br />
          <br />
          <strong>What’s in Store? </strong> These debates aren’t just legal
          discussions; they tackle questions that lie at the heart of our
          society. Whether it's the UCC’s role in unifying laws or Waqf’s
          significance in community welfare, this event aims to deepen your
          understanding of India’s diverse legal and cultural landscape.
          <br />
          <br />
          <strong>More Than Just Debate </strong>
          This isn’t another debate event. Every session is crafted to be
          accessible, interactive, and empowering, welcoming both seasoned
          debaters and newcomers. Surrounded by bright minds from across India,
          you’ll gain skills, knowledge, and friendships that last. Join Us!
          Step into the shoes of decision-makers and engage with real-world
          issues. If you’re ready to make your mark, October 26, 2024, is your
          chance. Come share your ideas, spark change, and shape a
          brighter future with us.
        </div>
      </div>

      <div className={styles.new}>
        <div className={styles.box}>
          <p>
            <div className={styles.text}>
              The Leader of the House is the leader of the majority party in the
              Lok Sabha. He or she is responsible for leading the government's
              business in the House. The Leader of the Opposition is the leader
              of the largest opposition party in the Lok Sabha. He or she is
              responsible for holding the government to account.
            </div>

            <div className={styles.text}>
              The two main political alliances in India as of October 2024 are:
              <br />
              <br />
              National Democratic Alliance (NDA): The NDA is a centre-right
              alliance led by the Bharatiya Janata Party (BJP). It is the ruling
              alliance at the central level and has governments in 17 states and
              union territories. The NDA has 38 constituents, including many
              smaller regional outfits. Some of the key members of the NDA
              include the AIADMK, Lok Janshakti Party, and Shiv Sena.
            </div>

            <div className={styles.text}>
              Indian National Developmental Inclusive Alliance (INDIA): The
              INDIA alliance is a centre-left alliance led by the Indian
              National Cangress (INC). It is the main opposition alliance at the
              central level and has governments in 7 states. The INDIA alliance
              has 28 constituents, including many regional parties. Some of the
              key members of the INDIA alliance include the Trinamool Congress,
              Dravida Munnetra Kazhagam, and Rashtriya Janata Dal.
            </div>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.textCom}>Commitees</h1>

        <section className={styles.mainsectn}>
          <div className={styles.imgbox}>
            <div className={styles.heading}>
              <h1>LOK SABHA</h1>
              {/* <p>(United Nations Human Resource Council)</p> */}
            </div>
          </div>

          <div className={styles.textbox}>
            <p>
              The Lok Sabha, also known as the House of the People, Is the lower
              house of the Parliament of India. It is composed of
              representatives of people chosen by direct election on the basis
              of universal adult suffrage. The Constitution of India allows for
              a maximum of 552 members In the House, with 530 members
              representing the States and 20 representing the Union Territories.
              At present, the Lok Sabha has 545 members.
            </p>

            <button onClick={() => navigate()} className={styles.btn}>
              Background Guide
            </button>
          </div>
        </section>
      </div>

      {/* <div className={styles.executive}> */}
      {/* <h1 className={styles.textEx}>EXECUTIVE BOARD</h1> */}

      {/* <div className={styles.cardbody}> */}
      {/* <div className={styles.card}> */}
      {/* <div className={styles.head}> */}
      {/* <div className={styles.img}><img src="" alt="" /></div>
              <h1>Username</h1>
            </div> */}
      {/* <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p> */}
      {/* </div> */}
      {/* <div className={`${styles.card} ${styles.cardtwo}`}> */}
      {/* <div className={styles.head}>
              <div className={styles.img}>
                <img src="" alt="" />
              </div>
              <h1>Username</h1>
            </div> */}
      {/* <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      <div className={styles.sponsorsCont}>
        <h1 className={styles.heading}>OUR SPONSORS</h1>
        <div className={styles.sponsors}>
          <div className={styles.sponsorCard}>
            <img
              src="https://res.cloudinary.com/dpvckds4h/image/upload/v1761131665/Gplus_Logo-01_szogn1.png"
              alt="GPlus"
              className={styles.sponsorImg}
              onClick={() => window.open("https://www.guwahatiplus.com/", "_blank")}
            />
          </div>
          <div className={styles.sponsorCard}>
            <img
              src="https://res.cloudinary.com/dpvckds4h/image/upload/v1761131636/BPCL_Golden_Jubilee_Logo_For_Dark_Background_myblvk.png"
              alt="BPCL"
              className={styles.sponsorImg}
              onClick={() => window.open("https://www.bharatpetroleum.in/index", "_blank")}
            />
          </div>
          <div className={styles.sponsorCard}>
            <img
              src="https://res.cloudinary.com/dpvckds4h/image/upload/v1761131616/RedoQ_white_qgy4hk.png"
              alt="RedoQ"
              className={styles.sponsorImg}
              onClick={() => window.open("https://redoq.com/", "_blank")}
            />
          </div>
        </div>
      </div>
      <div className={styles.sponsorsCont}>
        <h1 className={styles.heading}>PREVIOUS SPONSORS</h1>
        <div className={styles.sponsors}>
          <div className={styles.sponsorCard}>
            <img
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1729607349/nitsmun/sachkahu_a6kcyh.png"
              alt="Sach Kahu"
              className={styles.sponsorImg}
            />
          </div>
          <div className={styles.sponsorCard}>
            <img
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1729607350/nitsmun/easemytrip_dkb6cb.jpg"
              alt="Ease My Trip"
              className={styles.sponsorImg}
            />
          </div>
          <div className={styles.sponsorCard}>
            <img
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1729807171/nitsmun/83991643920_bthtxo.png"
              alt="Firefly"
              className={styles.sponsorImg}
            />
          </div>
          <div className={styles.sponsorCard}>
            <img
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1729807164/nitsmun/images_1_utgmeq.jpg"
              alt="Kumbli"
              className={styles.sponsorImg}
            />
          </div>
          <div className={styles.sponsorCard}>
            <img
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1729807170/nitsmun/image_g662hs.png"
              alt="Cogg"
              className={styles.sponsorImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youth;

//https://res.cloudinary.com/dffke2hbp/image/upload/v1721582847/vgp6wg9mdrqb01mr0nre.png"
