import React from "react";
import styles from "./Footer.module.css";
import FooterLayout from "@theme-original/Footer";
import { useLocation } from "@docusaurus/router"; 

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div>
      <FooterLayout />
      {isHomePage && (
        <div className={styles.animatedFooterContainer}>
          <div className={styles.footer_bg}>
            <div className={styles.footer_bg_one}></div>
            <div className={styles.footer_bg_two}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
