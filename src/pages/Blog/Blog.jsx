import React from "react";
import styles from "./Blog.module.scss";
import BlogCard from "../../components/Card/Card";

const BlogPage = () => {
  return (
    <div className={styles.blogpagecontainer}>
      <h1 className={styles.pagetitle}>BLOG PAGE</h1>
      <div className={styles.blogcardsgrid}>
        {Array.from({ length: 10 }).map((_, idx) => (
          <BlogCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
