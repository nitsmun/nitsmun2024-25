import styles from "./committe.module.scss";

const Committee = ({ committee }) => {
  return (
    <div className={styles.commiteeCont}>
      <div
        className={styles.leftImgCont}
        style={{ backgroundImage: `url(${committee.image})` }}
      >
        <div className={styles.heading}>
          {/* <h1>{committee.title}</h1>
          <p>{committee.subtitle}</p> */}
        </div>
      </div>
      <div className={styles.rightTextCont}>
        <p>
          <span>Agenda:</span> {committee.agenda}
        </p>
        {/* <a href={committee.bgGuideLink} className={styles.btn}>
          Background Guide
        </a> */}
      </div>
    </div>
  );
};

export default Committee;
