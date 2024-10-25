import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Achievement.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const Achievement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>ACHIEVEMENTS</div>
      <div className={styles.image}>
        <Swiper
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation]}
          className={styles.innerCont}
        >
          <SwiperSlide className={styles.photoCont}>
            <img
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1726055850/nitsmun/WhatsApp_Image_2024-09-11_at_12.46.33_PM_z5rlcl.webp"
              alt="achievement"
              className={styles.photo}
            />
            <div className={styles.text}>
              <p> SMIT MUN 2024</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Achievement;
