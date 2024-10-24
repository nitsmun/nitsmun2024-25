import styles from "./Home.module.scss";
import * as components from "../../components/index";
import Collaboration from "../../components/Collaboration/Collaboration";
import What from "../../components/What/What";
import Hero from "../../components/Hero/Hero";
import { useEffect } from "react";
// import Events from "../Events/Events";

const Home = () => {
  useEffect(() => {
    document.title = "NITSMUN";
  }, []);
  return (
    <div className={styles.parent}>
      <components.Navbar />
      Home
      <Hero />
      <div className={styles.letters}>
        <components.FacultyAdv />
        <components.SecGen />
      </div>
      <What />
      <Collaboration />
      <components.Achievements />
      <components.Testimonials />
      <components.Footer />
    </div>
  );
};
export default Home;
