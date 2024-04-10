import React from "react";
import styles from "./AboutBlog.module.scss";

const AboutBlog: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.photo}>
        <img src={process.env.PUBLIC_URL + "/aboutblog.jpg"} alt="Editor" />
      </div>
      <div className={styles.biography}>
        <p className={styles.title}>ABOUT KRISTINA</p>
        <p className={styles.text}>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        <a className={styles.contact} href="/contact">
          Get to know me
        </a>
      </div>
    </div>
  );
};

export default AboutBlog;
