import styles from "./SecGen.module.scss";

const FacultyAdv = () => {
  return (
    <div className={styles.FacultyAdv}>
      <h1 className={styles.heading}>Letter From Secretary General</h1>
      <div className={styles.innerCont}>
        <div className={styles.photoCont}>
          <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676477071/events/nitsmun/team/Ronak_Jain_etgqal.jpg"
            alt="Faculty Advisor"
            className={styles.photo}
          />
        </div>
        <p className={styles.text}>
          As the Secretary-General of NITSMUN, I am thrilled to share our vision
          and mission with you all. At NITSMUN, we are dedicated to fostering a
          culture of rational thinking and honing public speaking skills among
          our members.
          <br />
          <br />
          Our aim is not only to simulate United Nations conferences but also to
          empower individuals with the ability to articulate their perspectives
          on global affairs. We believe that by mastering the art of diplomacy
          and public speaking, our members can become effective advocates for
          change in their communities and beyond.
          <br />
          <br />
          Furthermore, we are committed to building a vibrant MUNing culture in
          North Eastern India. By providing platforms for dialogue, debate, and
          collaboration, we aspire to inspire the next generation of leaders and
          change-makers in the region.
          <br />
          <br />
          On behalf of my Secretariat, I welcome you all on this journey of
          youthful explorations, solving critical concerns, and more importantly
          voicing your zeal for peace. Ending my envelope with a notion: it
          takes billions of pounds to stock the weapons, millions of lives to
          victimise in wars, thousands of soldiers to fight a battle, but only
          one pen to hunch the harmony!
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default FacultyAdv;
