import styles from "./Contact.module.scss";
import { LocationOn } from "@mui/icons-material";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.header}>CONTACT US</h1>
      <div className={styles.left}>
        <h1 className={styles.headerDesktop}>CONTACT US</h1>
        <form>
          <div>
            <label>
              Name:<br></br>
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Email:<br></br>
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label>
              Message:<br></br>
              <textarea className={styles.textarea} name="Message"></textarea>
            </label>
          </div>
          <div className={styles.subCont}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div className={styles.right}>
        <div className={styles.logoCont}>
          <img
            src="https://res.cloudinary.com/dybbffhed/image/upload/v1720263284/qjwddcaqsaptighoydzx.png"
            alt="logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.address}>
            <LocationOn style={{ color: "white", fontSize: "30px" }} />
            <div className={styles.content}>
              NIT Silchar,
              <br />
              Silchar,Assam
            </div>
          </div>
          <div className={styles.address}>
            <FaPhone
              style={{
                color: "white",
                fontSize: "20px",
                transform: "rotate(90deg)",
              }}
            />
            <div className={styles.content}>+91 9332431234</div>
          </div>
          <div className={styles.address}>
            <FaEnvelope style={{ color: "white", fontSize: "30px" }} />
            <div className={styles.content}>nitsmun@nits.ac.in</div>
          </div>
        </div>
      </div>
      {/* <div className={styles["right-pic"]}>
        <img src="https://res.cloudinary.com/dybbffhed/image/upload/v1720263284/qjwddcaqsaptighoydzx.png" />
      </div>

      <div className={styles["right-text"]}>
        <div className="place">
          <LocationOn style={{ color: "white", fontSize: "50px" }} />
          <span style={{ paddingLeft: "30px" }}>
            NIT Silchar <br />
            <span style={{ paddingLeft: "75px" }}>Silchar , Assam </span>
          </span>
        </div>
        <div className={styles.number}>
          <FaPhone
            style={{
              color: "white",
              fontSize: "30px",
              transform: "rotate(90deg)",
            }}
          />
          <span style={{ paddingLeft: "30px" }}> +91 9332431234 </span>
        </div>
        <div className={styles.email}>
          <FaEnvelope style={{ color: "white", fontSize: "30px" }} />
          <span style={{ paddingLeft: "30px" }}> nitsmun@nits.ac.in </span>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
