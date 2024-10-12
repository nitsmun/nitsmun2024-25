import React, { useState } from "react";
import styles from "./FaqSection.module.scss"; 

const faqData = [
  {
    question: "What is this website about?",
    answer:
      "This website is a platform to provide information about our services and products. You can find detailed information and answers to your queries here.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact support through our Contact Us page. We have various support channels available.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact support through our Contact Us page. We have various support channels available.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact support through our Contact Us page. We have various support channels available.",
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
      <h2>
        <span className={styles.bold}>F</span>requently
        <span className={styles.bold}> A</span>sked
        <span className={styles.bold}> Q</span>uestions
      </h2>
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
