import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

import styles from "./Testimonials.module.scss";
import testimonialsData from "./Testimonials.json";

const Testimonials = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.head}> People Say About Us ... </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={styles.swiperCont}
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide className={styles.testimonial} key={testimonial.id}>
            <img src={testimonial.photo} alt="photo" className={styles.photo} />
            <div className={styles.upperbox}>
              {/* <div className={styles.photoCont}>
                <img src={testimonial.photo} alt="photo" className={styles.photo} />
              </div> */}
              <div className={styles.personCont}>{testimonial.person}</div>{" "}
              <div className={styles.textarea1}>
                <p>{testimonial.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
