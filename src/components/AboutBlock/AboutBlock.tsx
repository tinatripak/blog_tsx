import React from "react";
import styles from "./AboutBlock.module.scss";

const AboutBlock: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.photo}>
        <img src={process.env.PUBLIC_URL + "/editor.jpg"} alt="Editor" />
      </div>
      <div className={styles.biography}>
        <p className={styles.title}>MEET KRISTINA TRIPAK</p>
        <p className={styles.text}>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you. <br />
          <br /> This is a great space to write long text about your company and
          your services. You can use this space to go into a little more detail
          about your company. Talk about your team and what services you
          provide. Tell your visitors the story of how you came up with the idea
          for your business and what makes you different from your competitors.
          Make your company stand out and show your visitors who you are. <br />
          <br /> At Wix we’re passionate about making templates that allow you
          to build fabulous websites and it’s all thanks to the support and
          feedback from users like you! Keep up to date with New Releases and
          what’s Coming Soon in Wix ellaneous in Support. Feel free to tell us
          what you think and give us feedback in the Wix Forum. If you’d like to
          benefit from a professional designer’s touch, head to the Wix Arena
          and connect with one of our Wix Pro designers. Or if you need more
          help you can simply type your questions into the Support Forum and get
          instant answers. To keep up to date with everything Wix, including
          tips and things we think are cool, just head to the Wix Blog!
        </p>
      </div>
    </div>
  );
};

export default AboutBlock;
