import React from "react";
import styles from "./TrackRecord.module.scss";

const TrackRecord = () => {
  return (
    <div className={styles.main_track_record_container}>
      <div className={styles.track_record_container}>
        <div className={styles.auto_container}>
          <div className={styles.track_display_container}>
            <div className={styles.title}>
              <span>Lorem ipsum dolor </span>
              <h2>Track Record</h2>
            </div>
            <div className={styles.track_images}>
              <img
                className={styles.img_1}
                src={"/Assets/record_1.png"}
                alt={"track record image"}
              />
              <img src={"/Assets/record_2.png"} alt={"track record image"} />
            </div>
          </div>
          <div className={styles.active_record_container}>
            <div className={styles.record}>
              <h3>5K</h3>
              <div>
                <span>ACTIVE</span>
                <span>INVESTOR</span>
              </div>
            </div>
            <div className={styles.record}>
              <h3>9K</h3>
              <div>
                <span>ACTIVE</span>
                <span>Properties</span>
              </div>
            </div>
            <div className={styles.record}>
              <h3>5K</h3>
              <div>
                <span>CLIENT</span>
                <span>SERVED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRecord;
