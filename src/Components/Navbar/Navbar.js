import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo}>
        <img src={"/Assets/logo.png"} alt={"logo"} />
        <h5>Logo</h5>
      </div>
    </div>
  );
};

export default Navbar;
