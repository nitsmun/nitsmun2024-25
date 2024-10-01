import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimonial.module.scss";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import data from "../../assets/testimonials.json";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos
        style={{
          color: "darkblue",
          fontSize: "45px",
          marginTop: 20,
          display: "none",
          fontFamily: "slick",
        }}
      />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos
        style={{
          color: "darkblue",
          fontSize: "45px",
          display: "none",
          fontFamily: "slick",
        }}
      />
    </div>
  );
};

const Testimonial = () => {
  // Configure settings for react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className={styles.testimonialcontainerr}>
      <div className={styles.header}>
        <h1 className={styles.h1}>People say about us ...</h1>
      </div>
      <div
        style={{
          margin: "4rem auto",
          padding: "1rem",
          width: "80%",
          textAlign: "center",
        }}
      >
        <Slider
          prevArrow={<PreviousBtn />}
          {...settings}
          nextArrow={<NextBtn />}
          dots
        >
          {data.map((item) => (
            <>
              <Slide
                src={item.person1.src}
                alt={item.person1.alt}
                name={item.person1.name}
                year={item.person1.year}
                testimonial={item.person1.testimonial}
                serial={1}
              />
              <Slide
                src={item.person2.src}
                alt={item.person2.alt}
                name={item.person2.name}
                year={item.person2.year}
                testimonial={item.person2.testimonial}
                serial={2}
              />
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Slide = (props) => {
  return (
    <div className={styles.testimonialcontainer}>
      <div className={styles.box}>
        <div
          className={`${props.serial === 1 ? styles.upperCont : styles.lowerCont}`}
        >
          <div
            className={`${props.serial === 1 ? styles.upperbox : styles.lowerbox}`}
          >
            <div className={styles.person1}>
              <img src={props.src} alt={props.alt} />
            </div>
            <div className={styles.talk1}>
              <p className={styles.talky1}>{props.testimonial}</p>
              <div className={styles.designation1}>
                {props.name}, {props.year}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
