import React, { useState } from "react";
import styles from "../Css/signin.module.css";

import { useNavigate, NavLink, Link } from "react-router-dom";

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
          email,
          password
        }
        try {
          let data = await fetch('http://localhost:3002/user/login',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          })
          let response = await data.json();
          if(!response){
            alert('login unsuccess');
     
            console.log("this is for not login");      
          }
          else{
            alert(response.message);
            navigate("/Home");  
          }
       
          
    
        } catch (error) {
          console.log(error);
        }
    
            
            
        
    };

    return (
        <div className={styles.signinPage}>
            <div>
                <img
                    src="https://accounts.coschedule.com/img/login-boxes.svg"
                    className={styles.loginboxesbg1}
                    alt="Boxes to the Left"
                />
                <img
                    src="https://accounts.coschedule.com/img/login-boxes.svg"
                    className={styles.loginboxesbg2}
                    alt="Boxes to the Right"
                />
            </div>
            <div className={styles.formDiv}>
                <Link to="/">
                    <img
                        src="https://coschedule.com/img/cos-logo-full-color.svg"
                        className={styles.cosLogo}
                        alt="CoSchedule Logo"
                    />
                </Link>
                <br />

                <form onSubmit={handleSubmit}>
                    <div className={styles.formComponent}>
                        <label className={styles.formComponent_label}>EMAIL ADDRESS</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            required
                            className={styles.formComponent_input}
                        />
                    </div>

                    <div className={styles.formComponent}>
                        <label className={styles.formComponent_label}>PASSWORD</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.formComponent_input}
                        />
                    </div>

                    <div className={styles.formComponent}>
                        <input
                            className={styles.SigninBtn}
                            type="submit"
                            // onClick={loginUser}
                            value="Login"
                        />
                    </div>
                </form>

                <br />
                <p>
                    <span className={styles.underlined}>
                        <NavLink to="/Signup">Need an account? |</NavLink>
                    </span>
                    <span className={styles.underlined}>
                        <NavLink to="/Signup"> Forgot your password?</NavLink>
                    </span>
                </p>


            </div>


        </div>
    );
};

export default Signin;
