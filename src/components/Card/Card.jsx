import React from "react";
import styles from "./Card.module.scss";
import BlogImage from "../../assets/blogcardimage.png";

const BlogCard = () => (
  <div className={styles.blogcard}>
    <img src={BlogImage} alt="Blog Cover" />
    <div className={styles.blogcardcontent}>
      <h3>UNPEACE</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio..........{" "}
        <span>
          <a href="#">READ MORE</a>
        </span>
      </p>
    </div>
  </div>
);

export default BlogCard;
