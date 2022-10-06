import React from "react";

import { Link } from "react-router-dom";
import styles from "../Css/getademo.module.css";

const GetADemo = () => {
  return (
    <div>
      <div style={{ marginTop: "40px" }} className={styles.upperDiv}>
        <Link to="/">
          <img
            src="https://coschedule.com/img/cos-logo-full-color.svg"
            className={styles.cosLogo}
            alt="CoSchedule Logo"
          />
        </Link>

        <div className="upperDiv">
          <br />
          <div className={styles.cosDemoTitle}>
            <p className={styles.cosTitle}>See CoSchedule In Action</p>
            <p className={styles.organizeCoschedule}>
              See how you can organize everything in one place with CoSchedule.
            </p>
          </div>
        </div>

        <div className={styles.formDiv}>
          <form action="">
            <div className={styles.formComponent}>
              <label className={styles.formComponent_label}>Full Name</label>
              <br />
              <input
                className={styles.formComponent_input}
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div className={styles.formComponent}>
              <label className={styles.formComponent_label}>
                Email Address
              </label>
              <br />
              <input
                className={styles.formComponent_input}
                type="email"
                placeholder="Work Email Address"
              />
            </div>

            <div className={styles.formComponent}>
              <label className={styles.formComponent_label}>Company</label>
              <br />
              <input
                className={styles.formComponent_input}
                type="text"
                placeholder="Company Name"
              />
            </div>

            <div className={styles.formComponent}>
              <label className={styles.formComponent_label}>Website URL</label>
              <br />
              <input
                className={styles.formComponent_input}
                type="text"
                placeholder="Company Website URL"
              />
            </div>

            <input
              className={styles.nextSubmitBtn}
              type="submit"
              value="Next"
            />
          </form>
          <p className={styles.terms}>
            <span>By signing up, you agree to CoSchedule’s </span>
            <span className={styles.underlined}>
              terms of service, end user agreement, and privacy policy
            </span>
            <span>
              ; you are 16 years or older; and you will receive information from
              CoSchedule from which you can opt out at any time.
            </span>
          </p>
        </div>

        <p className={styles.terms} style={{ marginTop: "60px" }}>
          <span>© Copyright 2022, all rights reserved. </span>
          <span className={styles.underlined}> See our Terms & Policies.</span>
        </p>
      </div>
    </div>
  );
};

export default GetADemo;
