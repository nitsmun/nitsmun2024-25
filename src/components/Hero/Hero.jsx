import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.scss";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";

const Hero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setIsLoggedIn(!!email);
  }, []);

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        if (data.user?.email) {
          const userEmail = data.user.email.toLowerCase();
          localStorage.setItem("email", userEmail);
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    setIsLoggedIn(false);
  };

  const logoUrl =
    "https://res.cloudinary.com/dybbffhed/image/upload/v1720263284/qjwddcaqsaptighoydzx.png";

  return (
    <div className={styles.hero}>
      <div className={styles.loginCont}>
        {!isLoggedIn ? (
          <div className={styles.authButtons}>
            <button onClick={handleClick}>LOGIN</button>
            <Link to="/register">
              <button>REGISTER</button>
            </Link>
          </div>
        ) : (
          <button onClick={handleLogout}>LOGOUT</button>
        )}
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
