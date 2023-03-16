import React from "react";
import Footer from "../../Components/Footer/Footer";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import JoinRevolution from "../../Components/JoinRevolution/JoinRevolution";
import Navbar from "../../Components/Navbar/Navbar";
import TrackRecord from "../../Components/TrackRecord/TrackRecord";
import ZohoContent from "../../Components/ZohoContent/ZohoContent";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Navbar />
      <HeroHeader />
      <JoinRevolution />
      <ZohoContent />
      <TrackRecord />
      <Footer />
    </div>
  );
};

export default Home;
