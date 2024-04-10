import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Navbar.module.scss";
import React, { useState } from "react";
import { CiInstagram } from "react-icons/ci";
import { PiTelegramLogoThin } from "react-icons/pi";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleNavLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">Poise</NavLink>
        </div>
        <div className={`${styles.navElements} ${showNavbar && styles.active}`}>
          <ul className={styles.list}>
            <li className={styles.menuItem}>
              <NavLink
                to="/"
                className={styles.link}
                onClick={handleNavLinkClick}
              >
                Blog
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/about"
                className={styles.link}
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/contact"
                className={styles.link}
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.icons}>
          <div className={styles.socialMedia}>
            <CiInstagram size={30} />
            <PiTelegramLogoThin size={30} />
          </div>
          <div className={styles.menuIcon} onClick={handleShowNavbar}>
            <RxHamburgerMenu size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
