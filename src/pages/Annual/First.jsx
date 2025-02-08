import React from "react";
import styles from "./Firstone.module.scss";
import { Firstone } from "./data";
import Committee from "./committee";
import ExecutiveBoard from "./ExecutiveBoard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

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
          Bureau (IB) Committee at NITSMUN Annual Conference 2025! Join us on a
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
            Marvel Global Security Council (MGSC) tackles a pivotal issue that balances global security with individual freedom:
            "Reforming the Sokovia Accords and Establishing Global Oversight for Superhero Activities in the Post-Ultron Era.
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

      <div className={styles.committeeone}>
        <h1 className={styles.textEx}>COMMITTEES</h1>
        <div className={styles.commiteeParent}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className={styles.swiperCont}
          >
            {Firstone.map((committee, index) => (
              <SwiperSlide key={index}>
                <Committee key={committee.id} committee={committee} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      
      {/* <ExecutiveBoard /> */}
    </>
  );
};

export default First;
