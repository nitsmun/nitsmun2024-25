import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.box}>
      <img src={props.img} alt="" />
      <div className={styles.backbox}>
        <h2 className={styles.personName}>{props.name}</h2>

        <div className={styles.socialLinks}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
