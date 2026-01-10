import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./Achievements.module.scss";
// import "swiper/css";
// import "swiper/css/navigation";

const Achievement = () => {
  const achievements = [
    {
      title: "SMIT MUN 2024",
      image:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1726055850/nitsmun/WhatsApp_Image_2024-09-11_at_12.46.33_PM_z5rlcl.webp",
    },
    {
      title: "SMIT MUN 2025",
      image:
        "https://res.cloudinary.com/dsrnxwcmd/image/upload/v1768070616/smitmun_gygwv2.webp",
    },
    {
      title: "EntreMUN 2025",
      image:
        "https://res.cloudinary.com/dsrnxwcmd/image/upload/v1768074700/Entremun1_s42jfj.webp",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>ACHIEVEMENTS</div>

      <div className={styles.image}>
        <Swiper
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          loop={true}
          className={styles.innerCont}
        >
          {achievements.map((item, index) => (
            <SwiperSlide key={index} className={styles.photoCont}>
              <img src={item.image} alt={item.title} className={styles.photo} />
              <div className={styles.text}>
                <p>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Achievement;
