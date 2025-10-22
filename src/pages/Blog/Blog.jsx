import React, { useState } from "react";
import styles from "./Blog.module.scss";
import BlogCard from "../../components/Card/Card";
import BlogComponent from "../../components/BlogComponent/BlogComponent";
import blogData from "../../assets/blogdata.js";
const BlogPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };
  const handleBack = () => {
    setSelectedIndex(null);
  };
  return (
    <div className={styles.blogpagecontainer}>
      {selectedIndex === null ? (
        <div>
          <h1 className={styles.pagetitle}>BLOG PAGE</h1>
          <div className={styles.blogcardsgrid}>
            {/* {Array.from({ length: 10 }).map((_, idx) => (
            <BlogCard key={idx} />
          ))} */}
            {blogData.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                excerpt={blog.excerpt}
                image={blog.image}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        <BlogComponent blog={blogData[selectedIndex]} onBack={handleBack} />
      )}
    </div>
  );
};

export default BlogPage;
