import styles from "./Home.module.scss";
import * as components from "../../components/index";
import Collaboration from "../../components/Collaboration/Collaboration";
const Home = () => {
  return (
    <div className={styles.parent}>
      <components.Navbar />
      Home
      <Collaboration />
    </div>
  );
};
export default Home;
