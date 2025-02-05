import { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(0);

  const toggleMenu = () => {
    if (window.innerWidth < 800) {
      setMobileMenu((prev) => (prev === 0 ? 20 : 0));
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img
            src="https://res.cloudinary.com/dybbffhed/image/upload/v1720419652/mf2h9pxyvxylqialegvn.png"
            alt=""
          />
          <p>NITSMUN</p>
        </div>

        <div className={styles.ul} style={{ height: `${mobileMenu}rem` }}>
          <Link to="/" className={styles.navItem}>
            Home
          </Link>
          <Link to="/Events" className={styles.navItem}>
            Events
          </Link>
          <Link to="/about" className={styles.navItem}>
            About Us
          </Link>
          <Link to="/team" className={styles.navItem}>
            Secreteriat
          </Link>
          <Link to="/gallery" className={styles.navItem}>
            Photo Gallery
          </Link>
        </div>

        <div className={styles.hamburger}>
          <i className="fa fa-bars" onClick={toggleMenu}></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;