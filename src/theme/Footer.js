import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import FooterLayout from "@theme-original/Footer";
import { useLocation } from "@docusaurus/router";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(".navbar"); 
    const footer = document.querySelector(".footerContainer");

    if (!navbar || !footer || !isHomePage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          navbar.style.backgroundColor = "#61AE9D"; 
        } else {
          navbar.style.backgroundColor = "";
        }
      },
      { threshold: 1 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`footerContainer ${ isHomePage ? styles.footerContainer : ""}`}>
      <FooterLayout />
      {isHomePage && (
        <div className={styles.lottieContainer}>
          <dotlottie-player
            src="https://lottie.host/f466ad48-fde8-452a-aca8-2d153e8969ff/l92UT8AOsP.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      )}
    </div>
  );
};

export default Footer;
