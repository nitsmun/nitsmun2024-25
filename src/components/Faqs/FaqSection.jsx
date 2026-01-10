import React, { useState } from "react";
import styles from "./FaqSection.module.scss"; // Ensure this path is correct

const faqData = [
  {
    question: "What is NITSMUN?",
    answer: [
      {
        type: "text",
        value:
          "NITSMUN is a club run by students of NIT Silchar. It provides a platform for young minds to engage in diplomacy, debate global issues, and develop leadership and communication skills.",
      },
    ],
  },
  {
    question: "What is Model United Nations (MUN)?",
    answer: [
      {
        type: "text",
        value:
          "Model United Nations is an academic simulation of the United Nations where participants, called delegates, represent different countries or organizations and debate on international issues while following UN procedures.",
      },
    ],
  },
  {
    question: "What activities does NITSMUN conduct?",
    answer: [
      {
        type: "text",
        value: "NITSMUN organizes:",
      },
      {
        type: "list",
        value: [
          "Internal MUN simulations",
          "Internal MUN simulationsDebates and discussions",
          "Inter-college collaborations and events. ",
        ],
      },
    ],
  },
  {
    question: "Is prior MUN experience necessary?",
    answer: [
      {
        type: "text",
        value:
          "No. Beginners are welcome. We provide background guides and resources for every committee.",
      },
    ],
  },
  {
    question: "Does NITSMUN participate in external MUNs?",
    answer: [
      {
        type: "text",
        value:
          "Yes. The club actively encourages and supports members to participate in inter-college and national-level MUN conferences.",
      },
    ],
  },
  {
    question: "How can I become a member of NITSMUN?",
    answer: [
      {
        type: "text",
        value:
          "Members of the club are recruited in their second year, details, including recruitments and orientations, are announced through:",
      },
      {
        type: "list",
        value: [
          "Official NITSMUN social media pages",
          "Notices within the institute",
          "The NITSMUN website",
        ],
      },
    ],
  },
  {
    question: "Is there any membership fee?",
    answer: [
      {
        type: "text",
        value: "No. There is no membership fee to join the NITSMUN club.",
      },
    ],
  },
  {
    question: "What skills can I gain by joining NITSMUN?",
    answer: [
      {
        type: "text",
        value: "Members can develop:",
      },
      {
        type: "list",
        value: [
          "Public speaking and debating skills",
          "Research and writing abilities",
          "Leadership and teamwork",
          "Diplomacy and negotiation skills",
          "Confidence and critical thinking",
        ],
      },
    ],
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
              {item.answer.map((block, index) => {
                if (block.type === "text") {
                  return <p key={index}>{block.value}</p>;
                }

                if (block.type === "list") {
                  return (
                    <ul key={index}>
                      {block.value.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  );
                }

                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
