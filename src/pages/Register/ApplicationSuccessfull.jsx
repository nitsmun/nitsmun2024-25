import styles from "./ApplicationSuccessfull.module.scss";
import {Link} from "react-router-dom";
const ApplicationSuccessfull=()=>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <h1 className={styles.h1}>Application Sent Successfully!!</h1>
                <h3 className={styles.h3}>Please Check Your Email</h3>
                <Link className={styles.home} to="/">Home</Link>
            </div>
        </div>
    );
}

export default ApplicationSuccessfull;