import styles from "./Home.module.scss";
import * as components from "../../components/index";
import Collaboration from "../../components/Collaboration/Collaboration";
import What from "../../components/What/What";

const Home = () => {
  return (
    <div className={styles.parent}>
      <components.Navbar />
      Home
      <Collaboration />
      <What />
    </div>
  );
};
export default Home;
