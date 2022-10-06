import React from "react";
import styles from "./actionable.module.css";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
const Actionable = () => {
  return (
    <>
      <Navbar />
      <div className={styles.first_svg_div}>
        <svg x="0" y="0" preserveAspectRatio="none" viewBox="0 0 1293 652">
          <path
            d="M0 0h1293v547.5L289.2 650.6c-21.5 2.2-43.2-2.6-61.7-13.8L0 500.1V0z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#835CE5"
          ></path>
        </svg>
      </div>
      <div className={styles.develop_main_div}>
        <div className={styles.develop_main_second_div}>
          <div className={styles.develop_child_1_div}>
            <div className={styles.develop_child_1_h1_div}>
              <h1 className={styles.develop_child_1_div_h1}>
                Develop new marketing skills in 30 minutes (or less).
              </h1>
            </div>
            <div className="">
              <p className={styles.develop_child_1_div_p}>
                Find exactly what you want to learn when you want to learn it.
              </p>
            </div>
            <div className="">
              <button className={styles.develop_child_1_div_button}>
                Join the Actionable Marketing Institute Pro
              </button>
            </div>
            <div className="">
              <img
                className={styles.develop_child_1_div_img}
                src="https://coschedule.com/blog/wp-content/themes/CoS4/img/academy/white-sprinkles.svg"
                alt=""
              />
            </div>
            <div className="">
              <p className={styles.develop_child_1_div_p1}>
                Over 30 million marketers trust CoSchedule for marketing
                education.
                <br />
                Take your learning up a notch. Unlock 30+ exclusive courses
                packed with premium content.
              </p>
            </div>
          </div>

          <div className={styles.develop_child_2_div}>
            <div className="">
              <img
                className={styles.develop_child_2_div_img1}
                src="https://coschedule.com/blog/wp-content/themes/CoS4/img/academy/white-dots.svg"
                alt=""
              />
            </div>
            <div className="">
              <img
                className={styles.develop_child_2_div_img2}
                src="https://media.coschedule.com/uploads/2020/09/Template-Academy-Pro-Squeeze-Page_header-image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.industry_main_div}>
        <div className={styles.industry_child_div}>
          <div className={styles.industry_son_div}>
            <img
              className={styles.industry_child_div_image}
              src="https://media.coschedule.com/uploads/2020/09/Academy-Pro-Squeeze-Page_social-proof-1.png"
              alt=""
            />
            <h2 className={styles.industry_child_div_h2}>
              1,000+ lessons completed every month
            </h2>
          </div>

          <div className={styles.industry_son_div}>
            <img
              className={styles.industry_child_div_image}
              src="https://media.coschedule.com/uploads/2020/09/Academy-Pro-Squeeze-Page_social-proof-2.png"
              alt=""
            />
            <h2 className={styles.industry_child_div_h2}>
              2 Industry-recognized Certifications
            </h2>
          </div>

          <div className={styles.industry_son_div}>
            <img
              className={styles.industry_child_div_image}
              src="https://media.coschedule.com/uploads/2020/09/Academy-Pro-Squeeze-Page_social-proof-3.png"
              alt=""
            />
            <h2 className={styles.industry_child_div_h2}>
              100s of exclusive videos, templates, &amp; tutorials
            </h2>
          </div>
        </div>
      </div>

      <div className={styles.improve_main_container_div}>
        <div className={styles.improve_main_div}>
          <div className={styles.improve_child_div}>
            <h2 className={styles.improve_div_h2}>
              Improve your marketing with fluff-free training.
            </h2>
            <p>
              <span className={styles.improve_div_spam}>
                Most marketing courses &amp; conferences teach you what you
                should do vs. how to actually do it.&nbsp;
              </span>
              <span className={styles.improve_div_spam}>
                Why invest time or money in training if you can’t easily apply
                anything you learn?&nbsp;
              </span>
            </p>
            <p>
              <span className={styles.improve_div_spam}>
                No filler. No trend-chasing. No empty promises. Every course
                includes step-by-step tutorials, templates, and actionable
                advice you can implement to improve your marketing.
              </span>
            </p>
            <p>
              <span className={styles.improve_div_spam}>
                Drive better results using proven frameworks, techniques, and
                strategies found only in the Actionable Marketing Institute.
              </span>
            </p>
          </div>

          <div className={styles.improve_child_div}>
            <img
              className={styles.improve_child_div_img}
              src="https://media.coschedule.com/uploads/2020/09/Academy-Pro-Squeeze-Page-Graphics-05.png"
              alt="Person learning through the Actionable Marketing Institute"
            />
          </div>
        </div>
      </div>

      <div className={styles.Spend_container_main_div_spam}>
        <div className={styles.Spend_main_div}>
          <div className={styles.Spend_child_div}>
            <img
              className={styles.Spend_child_div_img}
              src="https://media.coschedule.com/uploads/2020/09/Academy-Pro-Squeeze-Page-Graphics-06.png"
              alt=""
            />
          </div>
          <div className={styles.Spend_child_div}>
            <h2 className={styles.Spend_div_h1}>
              Spend less time learning &amp; more time doing.
            </h2>
            <p>
              <span className={styles.Spend_div_spam}>
                Stop scouring Google results for quality, up-to-date advice.
                Enroll in the Actionable Marketing Institute Pro to unlock 30+
                premium courses that include everything you need to learn
                something new. From start to finish.&nbsp;
              </span>
            </p>
            <p>
              <span className={styles.Spend_div_spam}>
                Confidently put what you learn into action with courses designed
                to help you learn fast.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.become_container_main_div}>
        <div className={styles.become_main}>
          <div className="">
            <img
              className={styles.become_main_div_img1}
              src="https://coschedule.com/blog/wp-content/themes/CoS4/img/academy/black-sprinkles-half.svg"
              alt=""
            />
          </div>

          <div className={styles.become_main_div}>
            <div className={styles.become_child_div}>
              <h2 className={styles.become_child_div_h2}>
                Become a better marketer.
              </h2>
              <button className={styles.become_child_button}>
                Enroll To Get Started
              </button>
            </div>
          </div>
          <div className="">
            <img
              className={styles.become_main_div_img2}
              src="https://coschedule.com/blog/wp-content/themes/CoS4/img/academy/black-lines.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={styles.features_container}>
        <div className={styles.features_item}>
          <img
            src="https://media.coschedule.com/uploads/2020/09/Academy-Pro-Squeeze-Page_feature-1.png"
            alt=""
          />
          <h2>Take any course, any time.</h2>
          <p>
            Subscribe to the Actionable Marketing Institute Pro to get instant
            access to every single course in the Actionable Marketing Institute.
            Every category. Every level. On-demand.
          </p>
        </div>
        <div className={styles.features_item}>
          <img
            src="https://media.coschedule.com/uploads/2020/09/Academy-Pro-Squeeze-Page_feature-3.png"
            alt=""
          />
          <h2>Earn industry-recognized certifications.</h2>
          <p>
            Build your resume &amp; marketing skills by taking one of our
            advanced marketing certification courses. Become a Certified
            Marketing Strategist or Social Media Strategist.
          </p>
        </div>
        <div className={styles.features_item}>
          <img
            src="https://media.coschedule.com/uploads/2020/09/Academy-Pro-Squeeze-Page_feature-4.png"
            alt=""
          />
          <h2>Learn from marketing pros you trust.</h2>
          <p>
            The courses are taught by the CoSchedule experts behind our blog.
            Our instructors have tons of experience from building a million
            subscribers email list to averaging 700k+ monthly blog readers.
          </p>
        </div>
        <div className={styles.features_item}>
          <img
            src="https://media.coschedule.com/uploads/2020/09/Academy-Pro-Squeeze-Page_feature-2.png"
            alt=""
          />
          <h2>Choose new courses you want to see.</h2>
          <p>
            With the Actionable Marketing Institute Pro, you’ll get a new course
            every month. Your feedback determines what course to add next. You
            won’t want to miss a single one!
          </p>
        </div>
        <div className={styles.features_item}>
          <img
            src="https://media.coschedule.com/uploads/2020/09/Academy-Pro-Squeeze-Page_feature-5.png"
            alt=""
          />
          <h2>Your success is our guarantee.</h2>
          <p>
            Your learning is our #1 priority. If you are not satisfied with your
            course, contact us within 24 hours of completion for a full refund.
          </p>
        </div>
      </div>

      {/* style="background-color:#4BBB8D" */}

      <div className={styles.sedgwick_main_container}>
        <img
          className={styles.sedgwick_main_container_img}
          src="https://coschedule.com/blog/wp-content/themes/CoS4/img/academy/quotes.svg"
          alt=""
        />
        <h3>
          I like having access to so many courses in one place. They’re all
          short enough that they don’t feel like a huge commitment to start. But
          they focus on information I actually need to put these strategies into
          practice.
        </h3>
        <div className={styles.sedgwick_child_container}>
          <div className={styles.sedgwick_container}>
            <img
              src="https://media.coschedule.com/uploads/2020/09/Icy-Sedgwick.jpg"
              alt=""
            />
          </div>
          <p>Icy Sedgwick</p>
        </div>
        <img
          className={styles.sedgwick_main_container_img1}
          src="https://coschedule.com/blog/wp-content/themes/CoS4/img/academy/black-dots.svg"
          alt=""
        />
      </div>

      <div className={styles.logo_main_container}>
        <h2 class="center">
          CoSchedule’s marketing education resources featured in...
        </h2>
        <div className={styles.logo_child_container}>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/entrepreneur-logo.png"
              alt=""
            />
          </div>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/forbes-logo.png"
              alt=""
            />
          </div>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/inc-logo.png"
              alt=""
            />
          </div>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/techweek-logo-small.png"
              alt=""
            />
          </div>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/convince-convert-logo.png"
              alt=""
            />
          </div>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/mp-logo-01.png"
              alt=""
            />
          </div>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/usa-today-logo-02.png"
              alt=""
            />
          </div>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/sej-logo-01.png"
              alt=""
            />
          </div>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/adweek-logo-svg-white-02.png"
              alt=""
            />
          </div>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/moz-logo-02.png"
              alt=""
            />
          </div>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/copyblogger-logo.png"
              alt=""
            />
          </div>
          <div className="styles.media_images_item">
            <img
              className={styles.media_images_item_img}
              src="https://media.coschedule.com/uploads/2020/09/content-marketing-institute-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* style="background-color:#835CE5" */}

      <div className={styles.cta_main_container}>
        <img
          className={styles.cta_main_container_img1}
          src="https://coschedule.com/blog/wp-content/themes/CoS4/img/academy/black-waves.svg"
          alt=""
        />
        <img
          className={styles.cta_main_container_img2}
          src="https://coschedule.com/blog/wp-content/themes/CoS4/img/academy/black-swirl-half.svg"
          alt=""
        />

        <div className={styles.cta_child_container}>
          <h2>
            Unlock our most comprehensive, actionable content today with the
            Actionable Marketing Institute Pro.
          </h2>
          <h3>
            Join the 30 million marketers who trust CoSchedule as a leader in
            marketing education.
          </h3>
          <button> Enroll Now</button>
          <p>
            Access training &amp; tools you can find only in the Actionable
            Marketing Institute.
          </p>
        </div>
      </div>

      <div className={styles.pricing_container}>
        <div className={styles.pricing_heading_child}>
          <h2 class="center">Ready to start learning? </h2>
          <h3 class="center">
            Purchase any course for $99. Or subscribe to the Actionable
            Marketing Institute Pro &amp; unlock our entire course catalog for
            only $150 more.
          </h3>
        </div>

        <div className={styles.pricing_two_col_container}>
          <div className={styles.pricing_col_item}>
            <img
              src="https://media.coschedule.com/uploads/2020/09/Template-Academy-Pro-Squeeze-Page_pricing-course.png"
              alt=""
            />
            <div className={styles.pricing_col_text}>
              <div class="main-col-item">
                <div class="plan-col-item">
                  <div class="title-col-item">
                    <h2 className={styles.best_deal_h2}>
                      Any Actionable Marketing Institute Course
                    </h2>
                  </div>
                  <div className={styles.access_col_item}>
                    <p>Lifetime access</p>
                    <h4 class="small no-marg">$99/course</h4>
                  </div>
                </div>
                <div className={styles.features_col_item}>
                  <ul>
                    <li>Single Course</li>
                    <li>Video Tutorials</li>
                    <li>Premium Templates &amp; Downloads</li>
                  </ul>
                </div>
              </div>
              <button className={styles.last_div_button1}>Find A Course</button>
            </div>
          </div>

          <div className={styles.pricing_col_item}>
            <div className={styles.best_deal_callout}></div>
            <img
              src="https://media.coschedule.com/uploads/2020/09/Template-Academy-Pro-Squeeze-Page_pricing-pro.png"
              alt=""
            />
            <div className={styles.pricing_col_text}>
              <div class="main-col-item">
                <div class="plan-col-item">
                  <div class="title-col-item">
                    <h2 className={styles.best_deal_h2}>
                      Actionable Marketing Institute Pro
                    </h2>
                  </div>
                  <div className={styles.access_col_item}>
                    <p>Annual subscription</p>
                    <h4 class="small no-marg">$249/year ($2,475+ Value)</h4>
                  </div>
                </div>
                <div className={styles.features_col_item}>
                  <ul>
                    <li>Entire AMI Course Catalog</li>
                    <li>Video Tutorials</li>
                    <li>Templates &amp; Premium Downloads</li>
                    <li>Brand New Course Added Every Month</li>
                  </ul>
                </div>
              </div>
              <button className={styles.last_div_button2}>
                Go Pro To Unlock All 30+ Courses
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Actionable;
