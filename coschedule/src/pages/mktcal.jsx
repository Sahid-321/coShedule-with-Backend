
import styles from "../Css/mtkcal.module.css"
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const GroceryItem = (props) => {
  
    return ( 

    
    <div className={styles.maincontainer}>
            <div className={styles.nvdiv}> <Navbar /></div>
           
            <div  className={styles.main}>
             <div className={styles.browndiv}>
                <div className={styles.browndiv1}>
                      <div className={styles.headingpart}>
                          <h1 className={styles.shedule}>CoSchedule</h1>
                          <h3>Features</h3><h3>Marketing Calendar pro</h3><h3>sign in</h3>
                      </div>
                      <div className={styles.bring}>
                           <h1>Bring Together ALL Your Marketing <br></br>In One Calender</h1>
                      </div>
                      <p className={styles.para}>Finally see, schedule, & share all your marketing in a forever-free Marketing Calendar.</p>

                      <img  className={styles.pic1} src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fmarketing-calendar-hero.png&w=1200&q=75" alt="" />

                 </div>
                 <h1 className={styles.manage}>Wish There Was An Easier Way To Manage Your Marketingc ?</h1>
                  
                  <h4 className={styles.manage2}>You’ve got more marketing to get done. Multiple projects. An endless to-do list. 
                    Lots of ideas. Tons of spreadsheets & Google Docs. But you only have a limited amount of time and resources to get it all done.<br></br>

                    Having more marketing to coordinate results in marketing chaos. 
                    This is total disorganization that leaves you feeling anxious, overwhelmed, and unsure how to handle it all.
                  </h4>
                  <img  className={styles.pic2}  src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fmarketing-chaos.png&w=750&q=75" alt="" />

                  <div className={styles.pinkdiv}>
                      
                      <div className={styles.innerdiv}>
                         <div>
                            <img className={styles.innerdivimg}src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Ftop-marketers-report-success.png&w=256&q=75" alt="" />
                         </div>
                          <h2 className={styles.marketers} >Marketers are 441% more likely to report succes when they document there marketing strategy</h2>                      </div>
                          
                      </div>
                      <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fmarketing-bliss.png&w=750&q=75" alt="" />

                      <h5 className={styles.before}>Before CoSchedule, everything was scattered between emails & spreadsheets. 
                          With Marketing Calendar, I can easily organize all of my marketing and keep everyone on the same page.
                       </h5>
                       <h5 className={styles.before}>Beverly Cook, Director of Communications at NYC Leadership Center
                       Take Control, See All Your Work, & Show Your</h5> 

                       <div className={styles.smalldiv}>
                          <h1>Take Control, See All Your Work, & Show Your Progress With Marketing Calendar.</h1>
                       </div>
                       <div>
                           <img className={styles.pic4}  src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fsee-everything-together.png&w=1080&q=75" alt="" />
                           <h2 className={styles.see}>See Everything Togather (Finaly)</h2>
                       </div>
                            <div >
                               
                                <img  className={styles.pic5} src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fstay-flexible.png&w=1080&q=75" alt="" />
                                <h3>Stay Flexible When Plan Change</h3>
                            </div>
                        <div className={styles.picdiv}>
                              <h2>Plan Integrated Social Campaigns</h2>
                              <p>Create, schedule, & publish social campaigns to promote your blog posts, events, and other initiatives. Then analyze the results with social reports.</p>
                             <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Fplan-social-campaigns.png&w=1080&q=75" alt="" />
                        </div>
                    <h2>Transform The Way You Work In Just 14 Days</h2>
                      
                     <img className={styles.picdiv3} src="https://coschedule.com/_next/image?url=%2Fimg%2Fmarketing-calendar%2Ftransform-the-way-you-work.png&w=1200&q=75" alt="" />
             </div>



        <div className={styles.rightdiv}>
             
             <form action="">
                <h2>Create Your Forever Free Marketing Calendar</h2>
                 
                <div>
                    <label >FullName</label> <br></br>
                    <input type="text" name="name" placeholder="Enter Your Name"/>
                </div>

                <div>
                    <label >Email Address</label> 
                    <input type="text" name="name" placeholder="Enter Your Email"/>
                </div>

                <div>
                    <label >Company</label> 
                    <input type="text" name="name" placeholder="Enter Your Company Name"/>
                </div>

                <div>
                    <label >Website URL</label> 
                    <input type="text" name="name" placeholder="Company Website URL"/>
                </div>
                <div>
                    <label >Password</label> 
                    <input type="password" name="name" placeholder="Password(Minimum 8 Characters)"/>
                </div>

             <div className={styles.lastDiv}>
                <button type="submit">Get Started Now</button>
            </div>
            <p>By clicking "Get Started Now", you agree to CoSchedule’s terms of service, end user agreement, 
                and privacy policy; you are 16 years or older; 
                and you will receive information from CoSchedule from which you can opt out at any time.</p>
         </form>
            
        </div>
    </div>

    
      
       
      <div> <Footer />  </div> 
        
    </div>
    )
  };
  export default GroceryItem;