import React from "react";
import styles from "./ZohoContent.module.scss";

const ZohoContent = () => {
  return (
    <div className={styles.zoho_content_container}>
      <h5 className={styles.description_1}>
        Lorem ipsum dolor sit amet consectetur. Fusce et faucibus nunc pulvinar
        semper orci in. Viverra nec aliquam cras diam cras
      </h5>
      <h5 className={styles.description_2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. {"(4)"}
      </h5>
    </div>
  );
};

export default ZohoContent;
