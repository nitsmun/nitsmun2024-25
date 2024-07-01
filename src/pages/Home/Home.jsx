import styles from "./Home.module.scss";
import * as components from "../../components/index";
const Home = () => {
  return (
    <div className={styles.parent}>
      <components.Navbar />
      Nitsmun Homepage
    </div>
  );
};
export default Home;
