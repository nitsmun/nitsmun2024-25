import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.upper}>
        <div className={styles.logo}>
          <img
            src="https://res.cloudinary.com/dybbffhed/image/upload/v1720419652/mf2h9pxyvxylqialegvn.png"
            alt=""
          />

          <p>NITSMUN</p>
        </div>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/NITSMUN">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/nitsmun/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@nitsmun384">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/company/nit-silchar-model-united-nations">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.location}>
          <div>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <p>Nit Silchar</p>
          <p>Silchar,Assam</p>
        </div>
        <hr />
        <div className={styles.phone}>
          <a href="">
            <i className="fa-solid fa-phone"></i>
          </a>
          <p>+91 9332431234</p>
        </div>
        <hr />
        <div className={styles.email}>
          <a href="mailto:nitsmun@nits.ac.in">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <p>nitsmun@nits.ac.in</p>
        </div>
        <hr />
        <div className={styles.nav}>
          {/* <ul> */}
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Events">
            <li>Events</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/team">
            <li>Secretariat</li>
          </Link>
          <Link to="/gallery">
            <li>Gallery</li>
          </Link>
          {/* </ul> */}
        </div>
      </div>

      <div className={styles.lower}>
        <p>Copyright © 2024 All Rights Reserved by NITSMUN</p>
      </div>
    </div>
  );
};

export default Footer;
