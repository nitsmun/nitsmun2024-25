import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    if (isMobile) {
      setMobileMenu(!mobileMenu);
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 800);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="https://res.cloudinary.com/dybbffhed/image/upload/v1720419652/mf2h9pxyvxylqialegvn.png"
          alt="NITSMUN Logo"
        />
        <p>NITSMUN</p>
      </div>

      <div className={`${styles.ul} ${mobileMenu ? styles.open : ''}`}>
        <Link to="/" className={styles.navItem} onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/Events" className={styles.navItem} onClick={toggleMenu}>
          Events
        </Link>
        <Link to="/about" className={styles.navItem} onClick={toggleMenu}>
          About Us
        </Link>
        <Link to="/team" className={styles.navItem} onClick={toggleMenu}>
          Secreteriat
        </Link>
        <Link to="/gallery" className={styles.navItem} onClick={toggleMenu}>
          Photo Gallery
        </Link>
      </div>

      {/* <div className={styles.hamburger} onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div> */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <i className={`fa ${mobileMenu ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </div>
  );
};

export default Navbar;