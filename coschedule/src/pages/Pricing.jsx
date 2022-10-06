import React from 'react'
import styles from "../Css/Pricing.module.css"
import Footer from "../component/Footer"
function Pricing() {
  return (
    <div>
        <img id= {styles.img} src="https://mma.prnewswire.com/media/846690/CoSchedule_Logo.jpg?p=twitter" alt="" />
        <h1 id= {styles.h1}>Choose Your All-In-One Marketing Calendar</h1>
        <p id= {styles.p}>Create your calendar free today. No credit card required</p>

        <div  id= {styles.priceContain}>

                           {/* first box */}
            
               <div id= {styles.price1}>
                     <hr id= {styles.hr}/>
                    <h4>FREE</h4>
                    <h2>Marketing Calendar</h2>
                    <p id= {styles.p2}>The forever-free marketing calendar to see everything in one place.</p>
                    <h1>$0</h1><br></br>
                    <h3>Free Forever</h3> 
                    <button id= {styles.btn} href="">Get Started Free</button>
                    <p id= {styles.p3}>Marketing Calendar Free includes:</p><br></br>
                     <div id= {styles.pContain}>
                            <li>Personal Project & Task Management</li>
                            <li>Unlimited Marketing Projects and Content</li>
                            <li>Marketing & Project Management Integrations</li>
                            <li>Social Media Publishing Up to 2 Profiles</li>
                            <li>Self-Serve Knowledge Base</li>
                            <li>Basic Support</li>
                       </div>
                       <hr />
                       <a href="">See all features</a>
               </div>

                           {/* second box */}

               <div id= {styles.price2}>
               <hr id= {styles.hr}/>
                    <h4>PRO</h4>
                    <h2>Marketing Calendar</h2>
                    <p id= {styles.p2}>An advanced marketing calendar with limitless publishing.</p>
                    <h1>$29</h1><br></br>
                    <h3>per user / month</h3>
                    <button id= {styles.btn} href="">Get Started Free</button>
                    <p id= {styles.p3}>Includes all Marketing Calendar Free capabilities, plus:</p><br></br>
                       <div id= {styles.pContain}>
                            <li>Unlimited, Shareable Read-Only Calendar Views</li>
                            <li>Team Task Management & Collaboration</li>
                            <li>Recurring Tasks & Events</li>
                            <li>Customizable Task Workflow Templates</li>
                            <li>Unlimited Social Media Publishing</li>
                            <li>Bulk Social Media Scheduling</li>
                            <li>Social Media Automation</li>
                            <li>Social Media Campaign Templates</li>
                            <li>Priority Support</li>
                       </div>
                       <hr />
                       <a href="">See all features</a>
               </div>

                        {/* third box */}

               <div id= {styles.price3}>
               <hr id= {styles.hr}/>
                    <h4>PRO</h4>
                    <h2>Marketing Suite</h2>
                    <p id= {styles.p2}>A family of agile marketing products that helps you coordinate your process, projects, and teams.</p><br></br>
                       <p id= {styles.talk}>Lets Talk</p>
                    <button id= {styles.btn2} href="">Contact Sales</button>
                    <p id= {styles.p3}>Includes all Marketing Calendar Pro capabilities, plus:</p><br></br>
                       <div id= {styles.pContain}>
                        
                         <li>Marketing Campaigns</li>
                         <li>Sub-Calendars</li>
                         <li>Request Forms</li>
                         <li>Custom Permissions & User Access</li>
                         <li>Approval Workflows</li>
                         <li>Manager Visibility & Reporting</li>
                         <li>Kanban Board</li>
                         <li>Project & Campaign Templates</li>
                         <li>Advanced Audience Targeting for Social Publishing</li>
                         <li>Content Ideation Insights</li>
                         <li>Content Optimization Tools </li>
                         <li>Custom Integrations</li>
                         <li>Single Sign-On (SSO)</li>
                         <li>Custom Onboarding & Ongoing Training</li>
                         <li>1:1 Support With Dedicated Account Manager</li>
                         <li>And more!</li>
                       </div>
                       <hr />
                       <a href="">See all features</a>
               </div>
        </div>


     <div id={styles.faq}>
     <div><h1>"CoSchedule helps me easily see what’s on each person’s plate and shift or re-prioritize workloads when necessary."</h1></div>
            <div id={styles.image}>
                <img src="https://coschedule.com/img/testimonials/moria-fredrickson-blue-medora.jpg"/>
                <p>Moria Fredrickson,</p>
                <p>Blue Medora</p>
            </div>
         
     </div>


      <div id={styles.heading1}>
      {/* <h1 className={styles.heading1}>
       FAQs
        </h1> */}
        <h1>FAQs</h1>
      </div>
     
        <div id={styles.question}>
             <div className={styles.ans}>
                 <h3>What happens when I start a trial?</h3>
                 <p>Pure marketing magic: You’ll receive a free trial of CoSchedule for 14 days, no credit card needed. Want to subscribe to a paid plan? Just visit the billing page in your account.</p>
             </div>
             <div  className={styles.ans}>
                <h3>How do I get started with Marketing Suite?</h3>
                <p><a className={styles.link} href="demo.html">Click here</a>  to receive a demo of the CoSchedule Marketing Suite. You'll learn how it can help you coordinate your team, projects, and process.</p>
             </div>
             <div  className={styles.ans}>
                <h3>Which payment types do you accept?</h3>
                <p>Plastic is fantastic. We accept credit card payments for all of our plans. We may also accept other payment types for Marketing Suite. Check with your salesperson or our support team for details.</p>
             </div>
             <div  className={styles.ans}>
                <h3>I’m just getting started. How can I learn more about CoSchedule?</h3>
                <p>You can start right here by digging into our <a className={styles.link} href="signup.html">Getting Started page</a> or checking out onboarding videos in <a className={styles.link} href="">CoSchedule Academy.</a> </p>
             </div>
             <div  className={styles.ans}>
                <h3>Where can I find other helpful resources?</h3>
                <p>Our <a className={styles.link} href="">CoSchedule Guides</a>  will show you how to get totally organized in CoSchedule. And <a className={styles.link} href="">CoSchedule Academy</a> is chock full of video gold to help you maximize your marketing.</p>
             </div>
         </div>


       
      <div id={styles.faqy}>
        <h1 className={styles.heading2}>
           Trusted By The Industry’s Top-Performing Teams
        </h1>
      <div className={styles.container}>
        <div className={styles.second_container}>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fconvertkit-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
        </div>
      </div>

        </div>


        <div className={styles.coshome}>
        <h2 className={styles.coshomehead}>
        Not sure which plan is right for you?
        </h2>
       <div id={styles.p}>
       <p>Ask our customer service team about our plans, pricing, features, and more.</p>
        <p>We’re here to help you find the perfect Calendar for you.</p>
       </div>
        <a href="" className={styles.lastbtn}>
      Create My Calendar
        </a>
      </div>
      <Footer/>
    </div>
  )
}

export default Pricing