import styles from "./Contact.module.scss";
// import { LocationOn } from '@mui/icons-material';
// import { FaPhone } from 'react-icons/fa';
// import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1 className={styles.header}>Contact Us</h1>
        <form>
          <div>
            <label>
              Name:
              <br />
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Email:
              <br />
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label>
              Message:
              <br />
              <textarea className={styles.textarea} name="Message"></textarea>
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className={styles.rightPic}>
        <img src="" alt="Placeholder" />
      </div>

      <div className={styles.rightText}>
        <div className={styles.place}>
          {/* Uncomment and use React icons as needed */}
          {/* <LocationOn style={{ color: 'white', fontSize: '50px' }} /> */}
          <span style={{ paddingLeft: "30px" }}>
            NIT Silchar
            <br />
            <span style={{ paddingLeft: "75px" }}>Silchar, Assam</span>
          </span>
        </div>
        <div className={styles.number}>
          {/* Uncomment and use React icons as needed */}
          {/* <FaPhone style={{ color: 'white', fontSize: '30px', transform: 'rotate(90deg)' }} /> */}
          <span style={{ paddingLeft: "30px" }}>+91 9332431234</span>
        </div>
        <div className={styles.email}>
          {/* Uncomment and use React icons as needed */}
          {/* <FaEnvelope style={{ color: 'white', fontSize: '30px' }} /> */}
          <span style={{ paddingLeft: "30px" }}>nitsmun@nits.ac.in</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
