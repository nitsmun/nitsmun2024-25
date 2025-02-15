import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.scss";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";
const Hero = () => {
  const [signedin, setSignedin] = useState(false);

  useEffect(() => {
    setSignedin(signedin);
  }, [signedin]);

  const handleClick = () => {
    console.log("ok");
    signInWithPopup(auth, provider).then((data) => {
      if (data.user && data.user.email) {
        const userEmail = data.user.email.toLowerCase();
        localStorage.setItem("email", userEmail);
        setSignedin(true);
      } else {
        console.error("Error retrieving user data during sign-in.");
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    setSignedin(false);
  };
  const logoUrl =
    "https://res.cloudinary.com/dybbffhed/image/upload/v1720263284/qjwddcaqsaptighoydzx.png";

  return (
    <div className={styles.hero}>
      <div className={styles.loginCont}>
        {!localStorage.getItem("email") ? (
          <button onClick={handleClick}>LOGIN</button>
        ) : (
          <button onClick={handleLogout}>LOGOUT</button>
        )}
        <Link to="/register">
          <button className={styles.register}>REGISTER</button>
        </Link>
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
      </div>
    </div>
  );
};

export default Hero;
