import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.auto_container}>
        <div className={styles.footer_info_container}>
          <div className={styles.about_us}>
            <h4>About us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Porta diam amet gravida
              velit id quis consectetur sed hendrerit. Est volutpat morbi a
              purus. Convallis cras{" "}
            </p>
          </div>
          <div className={styles.contact_us}>
            <h4>Contact Us</h4>
            <p>1084 peak Dr Las vegas</p>
            <p>+1800555671</p>
            <p>+1800555671</p>
            <p>+1800555671</p>
          </div>
          <div className={styles.latest_properties}>
            <h4>Latest Properties</h4>
            <div className={styles.latest_images}>
              <img src={"/Assets/footer_latest_1.png"} alt="latest image" />
              <img src={"/Assets/footer_latest_1.png"} alt="latest image" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_line_container}>
        <p>Copyright Real Estate</p>
      </div>
    </div>
  );
};

export default Footer;
