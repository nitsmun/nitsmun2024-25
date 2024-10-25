import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.box}>
      <img src={props.img} alt="" />
      <div className={styles.backbox}>
        <h2 className={styles.personName}>
          {props.name}
          <br />
          <span style={{ fontSize: "0.7rem" }}>{props.post}</span>
        </h2>
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
              <img
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  filter: "invert(100%)",
                }}
                alt="Mail icon Loading..."
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1699636486/nitsmun/envelope-regular_sbnoql.svg"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
