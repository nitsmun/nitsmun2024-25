import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.box}>
      <img src={props.img} alt="" />
      <div className={styles.backbox}>
        <h2 className={styles.personName}>{props.name}</h2>
        {/* <h4 className={styles.personName}>{props.post}</h4> */}
        <div className={styles.socialLinks}>
          {props.fb && (
            <a href={props.fb} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
          )}
          {props.insta != "" && (
            <a href={props.insta} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          )}
          {props.linkedin != "" && (
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          )}
          {props.mail != "" && (
            <a href={props.mail} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-mail"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
