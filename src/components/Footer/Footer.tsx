import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.menuEmail}>
        <div className={styles.menu}>
          <a href="/" className={styles.logo}>
            POISE
          </a>
          <nav className={styles.navigation}>
            <ul className={styles.list}>
              <li className={styles.menuItem}>
                <a href="/blog" className={styles.link}>
                  Blog
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="/about" className={styles.link}>
                  About
                </a>
              </li>
              <li className={styles.menuItem}>
                <a href="/contact" className={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.email}>
          <p>Don't miss the fun.</p>
          <label htmlFor="emailAddress">Enter your email here</label> <br />
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            placeholder="Email Address"
          />
          <button type="submit">Subscribe</button>
        </div>
      </div>
      <p className={styles.copyrights}>
        © 2024 by Kristina Tripak. Inspired by Wix
      </p>
    </div>
  );
};

export default Footer;
