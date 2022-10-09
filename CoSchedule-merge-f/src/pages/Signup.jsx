import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../Css/createcalendar.module.css";
const Signup = () => {
  const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
          email: email,
          password: password,
          name: name
        }
    
        try {
          let data = await fetch('http://localhost:3002/user/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          });
          let response = await data.json();
          // console.log(response);
          if(response.message){
            alert(response.message);
          }
          else{
            alert("Signup Successful");
            navigate("/Signin");
          }
    
        } catch (error) {
          console.log(error);
        }
  };
  return (
    <div className={styles.calendarDiv}>
      <div className={styles.upperDiv}>
        <div className={styles.cosDemoTitle}>
          <p className={styles.cosTitle}>Create My Marketing Calendar</p>
          <p className={styles.organizeCoschedule}>
            Free for life. No credit card required.
          </p>
        </div>
      </div>

      <div className={styles.formDiv}>
        <form method="POST" onSubmit={handleSubmit}>
          <div className={styles.formComponent}>
            <label className={styles.formComponent_label}>Full Name</label>
            <br />
            <input
              className={styles.formComponent_input}
              type="text"
              value={name}
              name="name"
              onChange={(e)=>{setName(e.target.value)}}
              required
              placeholder="Full Name"
            />
          </div>

          <div className={styles.formComponent}>
            <label className={styles.formComponent_label}>Email Address</label>
            <br />
            <input
              className={styles.formComponent_input}
              type="email"
              value={email}
              name="email"
              onChange={(e)=>{setEmail(e.target.value)}}
              required
              placeholder="Work Email Address"
            />
          </div>
          <div className={styles.formComponent}>
            <label className={styles.formComponent_label}>Password</label>
            <br />
            <input
              className={styles.formComponent_input}
              type="password"
              value={password}
              name="password"
              onChange={(e)=>{setPassword(e.target.value)}}
              required
              placeholder="Password  ( minimum 8 characters )"
            />
          </div>

          <input
            className={styles.nextSubmitBtn}
            type="submit"
            value="Get Started "
            // onClick={PostData}
          />
        </form>
        <NavLink to="/Signin">Already have account</NavLink>
        <p className={styles.terms}>
          <span className={styles.terms_span}>
            By clicking "Get Started Now", you agree to CoSchedule’s{" "}
          </span>
          <span className={styles.underlined}>
            terms of service, end user agreement, and privacy policy
          </span>
          <span className={styles.terms_span}>
            ; you are 16 years or older; and you will receive information from
            CoSchedule from which you can opt out at any time.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;