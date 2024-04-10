import React from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  text: string;
}
const Title: React.FC<TitleProps> = ({ text }) => {
  return <p className={styles.heading}>{text}</p>;
};

export default Title;
