import styles from "./FacultyAdv.module.scss";

const FacultyAdv = () => {
  return (
    <div className={styles.FacultyAdv}>
      <h1 className={styles.heading}>Letter From Faculty Advisor</h1>
      <div className={styles.innerCont}>
        <div className={styles.photoCont}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1729409434/nitsmun/debjitbhowmick_jn2bg4.jpg"
            alt="Faculty Advisor"
            className={styles.photo}
          />
        </div>
        <p className={styles.text}>
          Dear Delegates, Since its inception, NITSMUN has been dedicated to
          building a strong MUN environment in the college. I personally feel
          that their hard work and attention to detail are commendable.
          I&apos;ve been connected to this club for quite some time, and it has
          never disappointed me. I look forward to seeing it flourish even more
          in the coming years.
          <br />
          <br />
          This time, they are planning an even grander three-day annual
          conference with three very exciting and unique committees. Held under
          the banner of Incandescence 2024, NITSMUN is ready to welcome all
          MUNners and non-MUNners from across the country.
          <br />
          <br />
          To everyone reading this, I encourage you to explore the website to
          learn more about this club and MUNs in general.
        </p>
      </div>
    </div>
  );
};

export default FacultyAdv;
