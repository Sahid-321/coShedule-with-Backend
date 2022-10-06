import styles from "../Css/marksuit.module.css";
// import Navbar from "../component/Navbar";
import Footer from "../component/Footer"
const Marksuit = (props) => {
  return (
    <div className={styles.maincontainer}>
      {/* <div  className={styles.navdiv}> <Navbar /> </div> */}
      <div className={styles.main}>
    
      <h1 className={styles.head}>
        Take Control Of Your Process And Bring Your Team Together.
      </h1>
      <h3 className={styles.para}>
        Complete more work. Deliver projects on time. Prove your value.
      </h3>
      <button className={styles.butn1}>Request Your Demo</button>
      <br />
      <a href="-blank" className={styles.ancher}>
        or get started free
      </a>
      <p className={styles.ptag}>
        CoSchedule Marketing Suite is a family of agile marketing products that
        helps you coordinate your process, projects, and teams.
      </p>

      <div className={styles.griddiv}>
        <div>
          <img
            className={styles.griddivimg}
            src="https://coschedule.com/img/product/content-organizer-product-icon.png"
            alt=""
          />
          <h3>Content Organizer</h3>
        </div>
        <div>
          <img
            className={styles.griddivimg}
            src="https://coschedule.com/img/product/marketing-calendar-product-icon.png"
            alt=""
          />
          <h3>Calendar Organizer</h3>
        </div>
        <div>
          <img
            className={styles.griddivimg}
            src="https://coschedule.com/img/product/work-organizer-product-icon.png"
            alt=""
          />
          <h3>Work Organizer</h3>
        </div>
        <div>
          <img
            className={styles.griddivimg}
            src="https://coschedule.com/img/product/asset-organizer-product-icon.png"
            alt=""
          />
          <h3>Asset Organizer</h3>
        </div>
      </div>
      <div className={styles.flexdiv1}>
        <div>
          <h1>Close the output gap with Marketing Suite</h1>
          <p>
            Marketers are expected to do more without more resources. 60% of the
            workweek is wasted managing work — not completing it.
          </p>
          <p>
            CoSchedule Marketing Suite removes time wasters so your team can
            perform to its full potential.
          </p>
        </div>
        <div>
          <iframe src="https://media.coschedule.com/uploads/2021/08/marketing-suite_output-gap_19.mp4">
            {" "}
          </iframe>
        </div>
      </div>

      <div className={styles.smalldiv}>
        <h1>Start completing more marketing with Marketing Suite</h1>
        <button>Request Your Demo</button>
      </div>
      <p className={styles.paragraph}>
        "CoSchedule Marketing Suite has been a fabulous tool for managing
        projects. It’s so seamless. There’s no more back-and-forth on whether
        projects have been completed. It’s all right there where everybody can
        see it, so everybody’s accountable"
      </p>

      <div className={styles.flexdiv2}>
        <div className={styles.imgdiv}>
          <img
            src="https://coschedule.com/img/testimonials/debora-spano-umass.png"
            alt=""
          />
        </div>
        <div className={styles.picdiv}>
          <h3>DEBORA SPANO</h3>
          <p>Proactive Media Relations Manager</p>
        </div>
      </div>
      <a href="_blank">
        See How Umass Memorial Gained back 93 productive hours every month
      </a>

      <div className={styles.griddiv2}>
        <div>
          <h1>Complete more work</h1>
          <p>
            Publish more content to generate a higher ROI by increasing your
            existing team’s productive work capacity. Eliminate endless email
            threads, unnecessary meetings, and desk drop-bys to complete 125%
            more work.
          </p>
        </div>
        <div>
          <img
            src="https://coschedule.com/img/product/suite/suite-complete-more-work.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://coschedule.com/img/product/suite/suite-deliver-projects-on-time.png"
            alt=""
          />
        </div>
        <div className={styles.innerdiv}>
          <h1>Deliver Projects On Time</h1>
          <p>
            Develop a high-performance team that completes projects on time by
            balancing the predictability and flexibility of your work. Maintain
            on-time task completion rates greater than 90%.
          </p>
        </div>
        <div>
          <h1>Prove your value</h1>
          <p>
            Get full visibility into your marketing operations to prioritize,
            plan, and manage a reliable pipeline of upcoming and in-flight
            projects. Focus 100% of your efforts on work that aligns with
            strategic business goals.
          </p>
        </div>
        <div>
          <img
            src="https://coschedule.com/img/product/suite/suite-prove-your-value.png"
            alt=""
          />
        </div>
      </div>

      <h1>Explore The Marketing Suite</h1>

      <div className={styles.griddiv3}>
        <div>
          <img
            src="https://coschedule.com/img/product/suite/suite-marketing-calendar2.png"
            alt=""
          />
        </div>
        <div className={styles.parahead}>
          <h3>CALENDAR ORGANIZER</h3>
          <h1>Visualize everything in real time</h1>
          <p>
            See every project on a unified calendar of record. Keep stakeholders
            "in the know.” Manage marketing requests and pivot quickly when
            priorities change.
          </p>
          <button className={styles.btn}> Explore More</button>
        </div>
        <div className={styles.parahead2}>
          <h3>CONTENT ORGANIZER</h3>
          <h1>Eliminate content bottlenecks from idea to promotion</h1>
          <p>
            Optimize your editorial process to save time and deliver more.
            Centralize publishing and promotion by connecting your tools.
          </p>
          <button className={styles.btn}> Explore More</button>
        </div>
        <div>
          <img
            src="https://coschedule.com/img/product/suite/suite-content-organizer.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://coschedule.com/img/product/suite/suite-work-organizer.png"
            alt=""
          />
        </div>
        <div className={styles.parahead3}>
          <h3>WORK ORGANIZER</h3>
          <h1>Maximize resources to increase output</h1>
          <p>
            Implement consistent, defined workflows to speed up production and
            identify how urgent changes impact proactively planned work.
          </p>
          <button className={styles.btn}> Explore More</button>
        </div>
        <div className={styles.parahead3}>
          <h3>ASSET ORGANIZER</h3>
          <h1>Catalog and maintain control of brand assets</h1>
          <p>
            Customize taxonomies to quickly find, update, and share files.
            Securely share folders and files with stakeholders to make sure your
            work is up-to-date.
          </p>
          <button className={styles.btn}> Explore More</button>
        </div>
        <div>
          <img
            src="https://coschedule.com/img/product/suite/suite-asset-organizer.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.footerdiv}>
        <h1>It's like adding a full-time marketer to your team. Seriously.</h1>
        <p>
          Marketing teams save an average of $50,000 a year with CoSchedule
          Marketing Suite.
        </p>

        <p>
          {" "}
          Find out how much productive time + money you’ll save (and share the
          results with your boss).
        </p>
      </div>
      <div className={styles.footerdiv2}>
        <h2 className={styles.take}>
          Take Control Of Your Process And Bring Your Team Together
        </h2>
        <p className={styles.ptag}>
          Complete more work. Deliver projects on time. And prove your marketing
          value. All with the CoSchedule Marketing Suite.
        </p>
        <button className={styles.btnend}>Request Your Demo</button>
      </div>
       {/* < Footer /> */}
    </div>
      <Footer />
  </div>
  );
};

export default Marksuit;
