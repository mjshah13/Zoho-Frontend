import React, { useState } from "react";
import axios from "axios";
import styles from "./JoinRevolution.module.scss";

const JoinRevolution = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    if (!email) {
      alert("Email is required");
    }
    let url = "https://www.zohoapis.eu/crm/v4/Leads";
    let headers = {
      Authorization:
        "Zoho-oauthtoken 1000.97a34ddddb3e77c0ef4320c15b1722c1.991d45f3d565ddfe0e0bb448e449d12a",
    };
    var data = JSON.stringify({
      data: [
        {
          Email: email,
        },
      ],
      trigger: ["approval", "workflow", "blueprint"],
    });
    let requestDetails = {
      url,
      method: "POST",
      headers: headers,
      data,
    };
    try {
      const response = await axios(url, requestDetails);
      console.log(response?.data);
    } catch (error) {
      console.log(error?.response?.data || "Something went wrong");
      alert(error?.response?.data?.message);
    }
  };
  return (
    <div className={styles.join_revolution_container}>
      <h2>Join the revolution</h2>
      <div className={styles.join_container}>
        <div className={styles.input_container}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
          />
        </div>
        <div className={styles.button_container}>
          <button onClick={handleSubmit}>Join</button>
        </div>
      </div>
    </div>
  );
};

export default JoinRevolution;
