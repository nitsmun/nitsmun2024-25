import React from "react";
import styles from "./Gallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css'; // Core Swiper styles (required)
import "swiper/css/pagination";
import "swiper/css/navigation";
// No need for swiper/css/effect-coverflow import
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useEffect } from "react";
const Gallery = () => {
  useEffect(() => {
    document.title = "NITSMUN | GALLERY";
  }, []);
  const photos = [
    {
      sl: 1,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1707127538/nitsmun/mockmun1_ulokow.jpg",
    },
    {
      sl: 2,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1707127536/nitsmun/mockmun2_qehbza.jpg",
    },
    {
      sl: 3,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1707127534/nitsmun/mockmun3_lp3fn7.jpg",
    },
    {
      sl: 4,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1706712669/nitsmun/gallery6_vw08yg.webp",
    },
    {
      sl: 5,
      src: "https://res.cloudinary.com/dp92qug2f/image/upload/v1679132667/nitsmun/juniormun2021/jmun_ss6_ka2xo6.webp",
    },
    {
      sl: 6,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1706712667/nitsmun/gallery1_srwzf8.webp",
    },
    {
      sl: 7,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1706712667/nitsmun/gallery5_n3dynj.webp",
    },
    {
      sl: 8,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1706712666/nitsmun/gallery3_x2blej.webp",
    },
    {
      sl: 9,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1706712666/nitsmun/gallery4_eyrcjr.webp",
    },
  ];
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
          {photos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.imagebox_container}>
                <img src={item.src} alt="Gallery photo" />
                <img src={item.src} alt="Gallery photo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
