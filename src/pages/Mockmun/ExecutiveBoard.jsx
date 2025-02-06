import styles from "./ExecutiveBoard.module.scss";
import { executiveBoard } from "./executivedata";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const ExecutiveBoard = () => {
  const swiperProps = {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
  };
  return (
    <div className={styles.executive}>
      <h1 className={styles.textEx}>EXECUTIVE BOARD</h1>

      <Swiper {...swiperProps} className={styles.swiperContainer}>
        {executiveBoard.map((member) => (
          <SwiperSlide key={member.id}>
            <div
              className={`${styles.card} ${member.variant ? styles[`card${member.variant}`] : ""}`}
            >
              <div className={styles.head}>
                <div className={styles.imgContainer}>
                  <img src={member.image} alt={member.name} />
                </div>
                <h1>{member.name}</h1>
                <p>{member.role}</p>
              </div>
              <p className={styles.description}>{member.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExecutiveBoard;
