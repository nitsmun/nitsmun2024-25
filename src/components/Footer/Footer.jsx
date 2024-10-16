import styles from "./Footer.module.scss";

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
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.location}>
          <a href="#">
            <i className="fa-solid fa-location-dot"></i>
          </a>
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
          <a href="">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <p>nitsmun@nits.ac.in</p>
        </div>
        <hr />
        <div className={styles.nav}>
          {/* <ul> */}
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>Events</li>
          </a>
          <a href="">
            <li>About Us</li>
          </a>
          <a href="">
            <li>Secretariat</li>
          </a>
          <a href="">
            <li>Gallery</li>
          </a>
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
