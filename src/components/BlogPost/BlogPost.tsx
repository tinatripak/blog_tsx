import React from "react";
import styles from "./BlogPost.module.scss";
import { IoEyeOutline } from "react-icons/io5";

interface BlogPostProps {
  data: {
    blogs: Array<BlogList>;
  };
}
interface BlogList {
  date: string;
  title: string;
  timeToRead: string;
  shortPost: string;
  wholePost: string;
  quote: string;
  image: string;
  countOfViews: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const { blogs } = data;
  return (
    <div className={styles.blogpost}>
      {blogs.map((blog, index) => (
        <div key={index} className={styles.blog}>
          <img src={process.env.PUBLIC_URL + blog.image} alt="Blog image" />
          <div className={styles.blogText}>
            <div>
              <p className={styles.date}>{blog.date}</p>
              <p className={styles.title}>{blog.title}</p>
              <p className={styles.shortPost}>{blog.shortPost}</p>
            </div>

            <div className={styles.viewBlock}>
              <IoEyeOutline size={20} />
              <p className={styles.views}>{blog.countOfViews}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
