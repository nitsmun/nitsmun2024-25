import React from "react";
import styles from "./Card.module.scss";

const BlogCard = ({ title, excerpt, image, onClick }) => (
  <div className={styles.blogcard} onClick={onClick}>
    <img src={image} alt="Blog Cover" />
    <div className={styles.blogcardcontent}>
      <h3>{title}</h3>
      <p>
        {excerpt}{" "}
        <span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
            READ MORE
          </a>
        </span>
      </p>
    </div>
  </div>
);

export default BlogCard;
