import React from "react";
import { Faqs, Objective, Vision } from "../../components";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <Vision />
      <Objective />
      <Faqs />
    </div>
  );
};

export default About;
