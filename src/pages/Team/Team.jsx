import { useEffect } from "react";
import { Navbar, Footer } from "../../components/index.js";
import styles from "./Team.module.scss";
import {
  Secretariat,
  Secretariatjr,
  Secretariatmediajr,
  Secretariatprjr,
  Secretariatresearchjr,
  Secretariatvideoeditingjr,
  Secretariatwebjr,
} from "./TeamData.jsx";
import Card from "./Card.jsx";

const Team = () => {
  useEffect(() => {
    document.title = "Team | NITSMUN";
  }, []);

  return (
    <div className={styles.parent}>
      <Navbar />

      <div>
        <div>
          <div>
            <div>
              <h1 className={styles.header}>Secretariat</h1>

              <div className={styles.photodesk}>
                {Secretariat.map((item) => (
                  <Card
                    img={item.imgsrc}
                    name={item.name}
                    key={item.id}
                    fb={item.fb ? item.fb : ""}
                    insta={item.insta ? item.insta : ""}
                    linkedin={item.linkedin ? item.linkedin : ""}
                    post={item.post ? item.post : ""}
                    mail={item.mail ? item.mail : ""}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div>
            <div>
              <h1
                className={styles.header}
                style={{ marginLeft: "20vw", marginRight: "20vw" }}
              >
                <hr />
              </h1>

              <div className={styles.photodesk}>
                {Secretariatjr.map((item) => (
                  <Card
                    img={item.imgsrc}
                    name={item.name}
                    key={item.id}
                    fb={item.fb ? item.fb : ""}
                    insta={item.insta ? item.insta : ""}
                    linkedin={item.linkedin ? item.linkedin : ""}
                    post={item.post ? item.post : ""}
                    mail={item.mail ? item.mail : ""}
                  />
                ))}
              </div>
            </div>

            <div>
              <h1
                className={styles.header}
                style={{ marginLeft: "20vw", marginRight: "20vw" }}
              >
                <hr />
              </h1>
              <h1 className={styles.header}>Media & Design Team</h1>
              <div className={styles.photodesk}>
                {Secretariatmediajr.map((item) => (
                  <Card
                    img={item.imgsrc}
                    name={item.name}
                    key={item.id}
                    fb={item.fb ? item.fb : ""}
                    insta={item.insta ? item.insta : ""}
                    linkedin={item.linkedin ? item.linkedin : ""}
                    post={item.post ? item.post : ""}
                    mail={item.mail ? item.mail : ""}
                  />
                ))}
              </div>
            </div>

            <div>
              <h1
                className={styles.header}
                style={{ marginLeft: "20vw", marginRight: "20vw" }}
              >
                <hr />
              </h1>
              <h1 className={styles.header}>Research Team</h1>
              <div className={styles.photodesk}>
                {Secretariatresearchjr.map((item) => (
                  <Card
                    img={item.imgsrc}
                    name={item.name}
                    key={item.id}
                    fb={item.fb ? item.fb : ""}
                    insta={item.insta ? item.insta : ""}
                    linkedin={item.linkedin ? item.linkedin : ""}
                    post={item.post ? item.post : ""}
                    mail={item.mail ? item.mail : ""}
                  />
                ))}
              </div>
            </div>

            <div>
              <h1
                className={styles.header}
                style={{ marginLeft: "20vw", marginRight: "20vw" }}
              >
                <hr />
              </h1>
              <h1 className={styles.header}>
                Public Relations, Marketing and Outreach Team
              </h1>
              <div className={styles.photodesk}>
                {Secretariatprjr.map((item) => (
                  <Card
                    img={item.imgsrc}
                    name={item.name}
                    key={item.id}
                    fb={item.fb ? item.fb : ""}
                    insta={item.insta ? item.insta : ""}
                    linkedin={item.linkedin ? item.linkedin : ""}
                    post={item.post ? item.post : ""}
                    mail={item.mail ? item.mail : ""}
                  />
                ))}
              </div>
            </div>

            <div>
              <h1
                className={styles.header}
                style={{ marginLeft: "20vw", marginRight: "20vw" }}
              >
                <hr />
              </h1>
              <h1 className={styles.header}>Technical Team</h1>
              <div className={styles.photodesk}>
                {Secretariatwebjr.map((item) => (
                  <Card
                    img={item.imgsrc}
                    name={item.name}
                    key={item.id}
                    fb={item.fb ? item.fb : ""}
                    insta={item.insta ? item.insta : ""}
                    linkedin={item.linkedin ? item.linkedin : ""}
                    post={item.post ? item.post : ""}
                    mail={item.mail ? item.mail : ""}
                  />
                ))}
              </div>
            </div>

            <div>
              <h1
                className={styles.header}
                style={{ marginLeft: "20vw", marginRight: "20vw" }}
              >
                <hr />
              </h1>
              <h1 className={styles.header}>Video Editing Team</h1>
              <div className={styles.photodesk}>
                {Secretariatvideoeditingjr.map((item) => (
                  <Card
                    img={item.imgsrc}
                    name={item.name}
                    key={item.id}
                    fb={item.fb ? item.fb : ""}
                    insta={item.insta ? item.insta : ""}
                    linkedin={item.linkedin ? item.linkedin : ""}
                    post={item.post ? item.post : ""}
                    mail={item.mail ? item.mail : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Team;
