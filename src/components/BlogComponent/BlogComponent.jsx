//Not in Use

import React from "react";
import styles from "./BlogComponent.module.scss";
import { IoArrowBack } from "react-icons/io5";

const BlogComponent = ({ blog, onBack }) => {
  return (
    <div className={styles.blogcomponent}>
      <button onClick={onBack} className={styles.backbtn}>
        <IoArrowBack size={24} />
      </button>
      <div>
        <div className={styles.textcontainer}>
          <p>{blog.text}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
