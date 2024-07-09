import styles from "./Hero.module.scss"; // Ensure the path and name are correct

const Hero = () => {
  const logoUrl =
    "https://res.cloudinary.com/dybbffhed/image/upload/v1720263284/qjwddcaqsaptighoydzx.png";
  return (
    <div className={styles.hero}>
      <div className={styles.loginbtns}>
        <button className={styles.btnone}>Log in</button>
        <button className={styles.btntwo}>Sign Up</button>
      </div>
      <div className={styles.logoitems}>
        <div className={styles.textarea}>
          <h1>
            <span>NIT&nbsp;</span>Silchar
          </h1>
          <p>
            Model United <br />
            Nations
          </p>
        </div>
        <div className={styles.borderline}></div>
        <img src={logoUrl} alt="" className={styles.logoimage} />
      </div>
    </div>
  );
};

export default Hero;
