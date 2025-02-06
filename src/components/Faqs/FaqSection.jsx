import React, { useState } from "react";
import styles from "./FaqSection.module.scss"; // Ensure this path is correct

const faqData = [
  {
    question: "What is NITSMUN?",
    answer:
      "NITSMUN is a club in NIT Silchar , which from its inception has been trying to develop a culture of MUNs in the campus",
  },
  {
    question: "What is Model United Nations?",
    answer:
      "Model United Nations is an academic simulation of the United Nations that aims to educate and encourage participants to discuss about major issues regarding the world ",
  },
  {
    question: "Will the conference be online or offline?",
    answer: "Offline",
  },
  {
    question: "Who can participate in NITSMUN Annual Conference 2025?",
    answer: "Anyone from any institute with an interest of MUNs can take part",
  },
  // Add more FAQ items as needed
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active index
  };

  return (
    <div className={styles.faqSection}>
      <div className={styles.headCont}>
        <h2>
          <span className={styles.bold}>F</span>requently
          <span className={styles.bold}> A</span>sked
          <span className={styles.bold}> Q</span>uestions
        </h2>
      </div>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""}`}
            onClick={() => handleClick(index)}
          >
            <div className={styles.faqQuestion}>
              {item.question}
              <span className={styles.faqIcon}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`${styles.faqAnswer} ${activeIndex === index ? styles.active : ""}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
