import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const BlogCard = ({ blog }) => (
  <div className={styles.blogcard}>
    <Link className={styles.blogcardlink} to={blog.link}>
      <img src={blog.image} alt="Blog Cover" />
      <div className={styles.blogcardcontent}>
        <h3>{blog.title}</h3>
        <p>
          {blog.excerpt} <span className={styles.highlighttext}>READ MORE</span>
        </p>
      </div>
    </Link>
  </div>
);

export default BlogCard;
