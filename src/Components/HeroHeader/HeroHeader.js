import React from "react";
import styles from "./HeroHeader.module.scss";

const HeroHeader = () => {
  return (
    <div className={styles.main_hero_header_container}>
      <div className={styles.hero_header_container}>
        <div className={styles.auto_container}>
          <div className={styles.title_container}>
            <h2>Build Generational Wealth By</h2>
            <h2>Building State Of The Art</h2>
            <h2>Real Estate</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur. Fusce et faucibus nunc
              pulvinar
            </p>
            <p>semper orci in. Viverra nec aliquam cras diam cras {"(2)"}</p>
          </div>
        </div>
        <div className={styles.over_lay_image_container}>
          <img src={"/Assets/hero_header_1.png"} alt={"Hero header image"} />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
