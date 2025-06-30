import React from "react";
import styles from "./Blog.module.scss";

const Blog = () => {
  return (
    <div className={styles.blog}>
      {/* When assigning className, always give styles.<className> as you are using module.scss */}
      Blog
    </div>
  );
};

export default Blog;
