import styles from "./Contact.module.scss";
import { LocationOn } from "@mui/icons-material";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1 className={styles.header}> Contact Us </h1>

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
              <input
                className={styles.textarea}
                type="textarea"
                name="Message"
              />
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className={styles["right-pic"]}>
        <img src="" />
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
      </div>
    </div>
  );
};

export default Contact;
