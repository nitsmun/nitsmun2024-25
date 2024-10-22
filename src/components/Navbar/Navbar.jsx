import { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(0);
  const [mobileMenu, setmobileMenu] = useState(0);
  const toggleMenu = () => {
    if (innerWidth < 800) {
      mobileMenu ? setmobileMenu(0) : setmobileMenu(20);
    }
    menu ? setMenu(0) : setMenu(13);
    // console.log("Hello");
    // const showMenu = document.querySelector(".ul");
    // showMenu.classList.add("myStyle");
    // }
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
          <Link to="/contact" className={styles.navItem}>
            Contact Us
          </Link>
        </div>
        <div className={styles.hidden} style={{ height: `${menu}rem` }}>
          <Link to="/team">Secreteriat</Link>
          <Link to="/">Photo Gallery</Link>
          {/* <Link href="#">Archieve</a> */}
        </div>
        <i className="fa fa-bars" onClick={toggleMenu}></i>
      </div>
    </>
  );
};
export default Navbar;
