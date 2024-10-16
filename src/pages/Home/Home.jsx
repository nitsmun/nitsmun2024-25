import styles from "./Home.module.scss";
import * as components from "../../components/index";
import Collaboration from "../../components/Collaboration/Collaboration";
import What from "../../components/What/What";
import Hero from "../../components/Hero/Hero";
import FaqSection from "../../components/Faqs/FaqSection";

// import Events from "../Events/Events";

const Home = () => {
  return (
    <div className={styles.parent}>
      <components.Navbar />
      Home
      <Hero />
      <What />
      <components.Objective />
      <FaqSection />
      <div className={styles.letters}>
        <components.FacultyAdv />
        <components.SecGen />
      </div>
      <Collaboration />
      <components.Testimonials />
      <components.Footer />
    </div>
  );
};

export default Home;
