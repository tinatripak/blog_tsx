import React from "react";
import styles from "./ContactForm.module.scss";

const ContactForm: React.FC = () => {
  return (
    <div className={styles.contactform}>
      <p className={styles.formHeading}>
        For inquiries and collaborations, reach me here
      </p>
      <form action="" className={styles.form}>
        <div className={styles.formLine}>
          <div className={styles.firstName}>
            <label htmlFor="fname">First Name</label>
            <br />
            <input type="text" id="fname" name="fname" />
          </div>
          <div className={styles.lastName}>
            <label htmlFor="lname">Last Name</label>
            <br />
            <input type="text" id="lname" name="lname" />
          </div>
        </div>
        <div className={styles.formLine}>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.phone}>
            <label htmlFor="phone">Phone</label>
            <br />
            <input type="phone" id="phone" name="phone" />
          </div>
        </div>
        <div className={styles.textareaLine}>
          <label htmlFor="message">Leave us a message...</label>
          <br />
          <textarea id="message" name="message" />
        </div>
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
