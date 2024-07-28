import { useEffect } from "react";
import { Navbar } from "../../components/index.js";
import styles from "./Team.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  Secretariat,
  Secretariatjr,
  // Secretariatmediajr,
  // Secretariatresearchjr,
  // Secretariatprjr,
  // Secretariatwebjr,
} from "./TeamData.jsx";
import Card from "./Card.jsx";

const Team = () => {
  useEffect(() => {
    document.title = "Team | NITSMUN";
  }, []);

  return (
    <div className={styles.parent}>
      <Navbar />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <h1 className={styles.header}>Secretariat</h1>

          <div className={styles.photodesk}>
            {Secretariat.map((item) => (
              <Card img={item.imgsrc} name={item.name} key={item.id} />
            ))}
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <h1 className={styles.header}>Meet Team</h1>

          <div className={styles.photodesk}>
            {Secretariatjr.map((item) => (
              <Card img={item.imgsrc} name={item.name} key={item.id} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Team;
