import React from "react";
import styles from "./Blog.module.scss";

const BlogCard = () => (
  <div className={styles.blogcard}>
    <img src="src\assets\blogcardimage.png" alt="Blog Cover" />
    <div className={styles.blogcardcontent}>
      <h3>UNPEACE</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet
        odio.........&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#">READ MORE</a>
      </p>
    </div>
  </div>
);

const Blog = () => {
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

export default Blog;
