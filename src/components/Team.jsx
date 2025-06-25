import React from "react";
import team1 from "../assets/img/team/team1.jpg";
import team2 from "../assets/img/team/team2.jpg";
import team3 from "../assets/img/team/team3.jpg";
import team4 from "../assets/img/team/team4.jpg";

const Team = () => {
  return (
    <>
      <section id="team" className="team section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Our hard working team</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src={team1}
                    className="img-fluid"
                    alt="team 1"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Engr.Aftab Ufaq</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Full Stack Developer with over 5 years of experience in
                    mobile app development using React Native, backend
                    development with Node.js and PHP, web development using
                    React.js and Bootstrap, and managing app deployment,
                    updates, and optimization on both the App Store and Play
                    Store.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                   src={team4}
                    className="img-fluid"
                    alt="team 4"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Muhammad Abid</h4>
                  <span>ASO Manager</span>
                  <p>
                    ASO And SEO Expert having more then 6 years of experince for
                    app store ASO and ON page SEO and OFF page seo
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src={team3}
                    className="img-fluid"
                    alt="team 3"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Iftikhar Ahmad</h4>
                  <span>iOS Team Lead</span>
                  <p>
                    Senior SwiftUI Developer having more then 3 years if
                    experince in development high performacne iOS Apps
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src={team2}
                    className="img-fluid"
                    alt="team 2"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sudais Rehman</h4>
                  <span>Flutter Developer</span>
                  <p>
                    Having 2 years of experince in development mobile apps uing
                    fluter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Team;
