import { useEffect } from "react";
import { Navbar } from "../../components/index.js";
import styles from "./Team.module.scss";

import {
  Secretariat,
  Secretariatjr,
  Secretariatmediajr,
  Secretariatresearchjr,
  Secretariatprjr,
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
              />
            ))}
          </div>
        </div>

        {/* Second Slide */}
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
