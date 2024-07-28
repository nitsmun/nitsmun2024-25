import { useState } from "react";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  const [menu, setMenu] = useState(0);
  const [mobileMenu, setmobileMenu] = useState(0);

  const toggleMenu = () => {
    if (innerWidth < 800) {
      mobileMenu ? setmobileMenu(0) : setmobileMenu(26);
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
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Events</li>
          </a>
          <a href="#">
            <li>About Us</li>
          </a>
          <a href="#">
            <li>Contact Us</li>
          </a>
        </div>
        <div className={styles.hidden} style={{ height: `${menu}rem` }}>
          <a href="#">Secreteriat</a>
          <a href="#">Photo Gallery</a>
          <a href="#">Archieve</a>
        </div>
        <i className="fa fa-bars" onClick={toggleMenu}></i>
      </div>
    </>
  );
};
export default Navbar;
