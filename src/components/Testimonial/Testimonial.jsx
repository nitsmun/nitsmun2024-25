import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimonial.module.scss";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

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
        <h1>People say about us ...</h1>
      </div>
      <div style={{ margin: "4rem auto", width: "90%", textAlign: "center" }}>
        <Slider
          prevArrow={<PreviousBtn />}
          {...settings}
          nextArrow={<NextBtn />}
          dots
        >
          <Slide />
          <Slide />
          <Slide />
        </Slider>
      </div>
    </div>
  );
};

const Slide = () => {
  return (
    <div className={styles.testimonialcontainer}>
      <div className={styles.box}>
        <div className={styles.upperbox}>
          <div className={styles.person1}>
            <img src="" alt="" />
          </div>
          <div className={styles.talk1}>
            <p className={styles.talky1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda harum dicta error nobis similique eius accusantium
              temporibus iste voluptas nostrum, eum dolorem consequatur
              aspernatur dcorrupti sunt iure veniam. Debitis atque libero
              voluptatum minima me eligendi illo ad nam.
            </p>
            <div className={styles.designation1}>Vivek Sharma, 1st year</div>
          </div>
        </div>
        <div className={styles.lowerbox}>
          <div className={styles.talk2}>
            <p className={styles.talky2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Adipisicing, ad sequi fuga quo nisi at quis nam, consectetur,
              aperiam ipsum unde consequatur debitis repudiandae deserunt. Ab
              ratione maxime expedita aspernatur provident placeat quae deserunt
              repellat, eaque optio tempora impedit debitis, dicta dolor quis
              consequatur eos.
            </p>
            <div className={styles.designation2}>Barnil Sarma, 3rd year</div>
          </div>
          <div className={styles.person2}>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
