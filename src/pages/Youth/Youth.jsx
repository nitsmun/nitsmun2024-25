import React from "react";
import styles from "./Youthone.module.scss";

const Youth = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.mainpage}>
        <div className={styles.tittle}>
          <h1>YOUTH PARLIAMENT</h1>
        </div>
        <div className={styles.content}>
          Get ready for a day filled with electrifying debates, passionate
          discussions, and the chance to make your voice heard at the NITSMUN
          Youth Parliament 2023! Mark your calendars for October 26, 2024,
          because we're about to dive headfirst into the hot topics of "One
          Nation, One Election" and "Unrest in Manipur".
          <br />
          <br />
          Hey there! We know that politics and diplomacy might sound a bit
          daunting, but we promise, this event will be anything but boring.
          We're bringing a fresh perspective to the table, and we want you to
          join the conversation.
          <br />
          <br />
          Picture this: You, your friends, and some of the brightest young
          minds, all gathered under one roof to discuss the biggest issues being
          faced by our nation. Whether you're a seasoned debater or just getting
          started, there's a place for everyone at NITSMUN Youth Parliament.
          <br />
          <br />
          This isn't just another event. It's a chance to be part of the change
          you want to see in the world. Get ready to have a blast while tackling
          serious matters.Join us, and let's make politics fun, engaging, and
          interactive. The event takes place on 5th November, 2023.
        </div>
      </div>

      <div className={styles.new}>
        <div className={styles.box}>
          <p>
            <div className={styles.text}>
              Ignite the Change at NITSMUN Youth Parliament 2024! Prepare
              yourself for an unforgettable day of debates, passionate
              exchanges, and opportunities to make your voice heard at the
              NITSMUN Youth Parliament 2024! Circle the date: October 26, 2024.
              This is more than just an event—it’s your chance to contribute to
              conversations that are shaping the future of our country.
            </div>

            <div className={styles.text}>
              This Year’s Spotlight Issues: Uniform Civil Code (UCC) and Waqf
              These aren’t just terms from legal textbooks; the Uniform Civil
              Code and Waqf influence every layer of our society, weaving into
              the fabric of justice, equality, and identity in India. The
              discussion surrounding UCC delves into how our laws can be uniform
              across religions while respecting diversity. Similarly, the
              concept of Waqf plays a critical role in community welfare,
              property management, and religious endowments. Through these
              topics, we’ll explore questions of unity, freedom, and what it
              truly means to be inclusive.
            </div>

            <div className={styles.text}>
              Why This Isn’t Just Another Debate Event We understand that
              politics and diplomacy can sometimes seem intimidating or, worse,
              tedious. But trust us: this event is crafted to bring a whole new
              perspective. We’re making sure that every session is interactive,
              every discussion is accessible, and every participant feels
              empowered to speak up. Whether you’re a seasoned debater or just
              testing the waters, there’s a place for everyone here at NITSMUN
              Youth Parliament.
              <br />
              <br />
              <br />
              Imagine the Scene Picture this: You’re surrounded by like-minded
              peers from across the country, each one of them bringing unique
              perspectives, ideas, and arguments to the table. You’ll be
              standing shoulder-to-shoulder with some of the brightest minds of
              your generation, each one eager to voice their opinions and create
              meaningful change. This is your chance to develop not just your
              debating skills but also your knowledge, empathy, and
              understanding of the diverse issues that shape our nation.
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
              The Lok Sabha, or House of the People, is India’s primary
              legislative body, made up of directly elected representatives.
              It’s where major national issues are debated, laws are created,
              and the government is held accountable. With the power to
              introduce and pass key bills, especially financial ones, it plays
              a crucial role in shaping India’s future. Elections for the Lok
              Sabha take place every five years, and the party with the majority
              forms the government. It’s a cornerstone of Indian democracy,
              giving voice to the people’s interests and concerns.
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
              <div className={styles.img}>{/* <img src="" alt="" /> */}</div>
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
          </div>
          <div className={`${styles.card} ${styles.cardtwo}`}>
            <div className={styles.head}>
              <div className={styles.img}>
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
          </div>
        </div>
      </div>
      <div className={styles.sponsorsCont}>
        <h1 className={styles.heading}>OUR SPONSORS</h1>
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
        </div>
      </div>
    </div>
  );
};

export default Youth;

//https://res.cloudinary.com/dffke2hbp/image/upload/v1721582847/vgp6wg9mdrqb01mr0nre.png"
