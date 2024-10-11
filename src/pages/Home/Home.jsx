import styles from "./Home.module.scss";
import * as components from "../../components/index";
import Collaboration from "../../components/Collaboration/Collaboration";
import What from "../../components/What/What";
import Hero from "../../components/Hero/Hero";

// import Events from "../Events/Events";

const Home = () => {
  return (
    <div className={styles.parent}>
      <components.Navbar />
      Home
      <Hero />
      <components.Testimonials/>
      <Collaboration />
      <What />
      <components.Objective />
    </div>
  );
};
export default Home;
