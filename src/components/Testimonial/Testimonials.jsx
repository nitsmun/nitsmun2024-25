import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Swiper styles
import 'swiper/css/navigation'; // Swiper navigation styles
import 'swiper/css/pagination'; // Swiper pagination styles

import { Navigation, Pagination } from 'swiper/modules'; // Swiper v7+ import

import styles from './Testimonials.module.scss'; // Ensure path is correct
import testimonialsData from './Testimonials.json'; // Ensure path is correct

const Testimonials = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.head}> People Say About Us ... </div>

      <Swiper
        modules={[Navigation, Pagination]} // Add Swiper modules
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Number of slides to show at once
        navigation // Enable navigation buttons
        pagination={{ clickable: true }} // Enable pagination bullets
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            {/* Upper Box */}
            <div className={styles.upperbox}>
              <div className={styles.person1}>{testimonial.person}</div> {/* Display the person's name */}
              <div className={styles.textarea1}>
                <p>{testimonial.text}</p> {/* Display the testimonial text */}
                <div className={styles.designation1}>{testimonial.designation}</div> {/* Display the person's designation */}
              </div>
            </div>
            
            {/* Lower Box */}
            <div className={styles.lowerbox}>
              <div className={styles.person2}>{testimonial.person}</div> {/* Display the person's name again or another content */}
              <div className={styles.textarea2}>
                <p>{testimonial.text}</p> {/* Display the testimonial text */}
                <div className={styles.designation2}>{testimonial.designation}</div> {/* Display the person's designation */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
