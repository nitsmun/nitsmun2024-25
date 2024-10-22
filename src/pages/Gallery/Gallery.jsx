import React from "react";
import styles from "./Gallery.module.scss";
import { Secretariat } from "../Team/TeamData";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css'; // Core Swiper styles (required)
import "swiper/css/pagination";
import "swiper/css/navigation";
// No need for swiper/css/effect-coverflow import
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <h1 className={styles.gallery_head}>Photo Gallery</h1>

      <div className={styles.photo_container}>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation, EffectCoverflow]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              effect: "slide",
            },
            // 200: {
            //   slidesPerView: 2,
            //   effect: 'slide',
            // },

            500: {
              slidesPerView: 2,
              effect: "coverflow",
              coverflowEffect: {
                rotate: 50, // Adjust the rotation
                stretch: 100, // Adjust the space between the slides
                depth: 200, // Adjust the 3D depth of the slides
                modifier: 1,
                slideShadows: true,
              },
            },

            600: {
              slidesPerView: 3,
              effect: "slide",
            },
          }}
        >
          {Secretariat.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.imagebox_container}>
                <img src={item.imgsrc} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
