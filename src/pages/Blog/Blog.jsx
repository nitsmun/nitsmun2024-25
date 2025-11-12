import React from "react";
import { useEffect } from "react";
import styles from "./Blog.module.scss";
import BlogCard from "../../components/Card/Card";
// import BlogComponent from "../../components/BlogComponent/BlogComponent";
import blogData from "../../assets/blogData.js";
const BlogPage = () => {
  useEffect(() => {
    document.title = "NITSMUN | BLOG";
  }, []);
  return (
    <div className={styles.blogpagecontainer}>
      <div>
        <h1 className={styles.pagetitle}>BLOG PAGE</h1>
        <div className={styles.blogcardsgrid}>
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
