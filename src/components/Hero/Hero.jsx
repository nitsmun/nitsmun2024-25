import styles from "./Hero.module.scss";

const Hero = () => {
  const logoUrl =
    "https://res.cloudinary.com/dybbffhed/image/upload/v1720263284/qjwddcaqsaptighoydzx.png";
  return (
    <div className={styles.hero}>
      <div className={styles.loginbtns}>
        {/* <button className={styles.btnone}>Log in</button> */}
      </div>
      <div className={styles.logoitems}>
        <div className={styles.logoHolder}>
          <img src={logoUrl} alt="" className={styles.logoimage} />
        </div>
        <div className={styles.borderCont}>
          <div className={styles.borderline}></div>
        </div>
        <div className={styles.textarea}>
          <h1 className={styles.heading}>
            <span>NIT&nbsp;</span>Silchar
          </h1>
          <p className={styles.bodyPara}>
            Model United <br />
            Nations
          </p>
        </div>
        {/*<div>
          <div className={styles.textarea}>
            <h1 className={styles.heading}>
              <span>NIT&nbsp;</span>Silchar
            </h1>
            <p className={styles.bodyPara}>
              Model United <br />
              Nations
            </p>
          </div>
          <div className={styles.borderline}></div>
        </div>
        <img src={logoUrl} alt="" className={styles.logoimage} />*/}
      </div>
    </div>
  );
};

export default Hero;
