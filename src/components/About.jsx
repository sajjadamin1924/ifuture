import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>Who We Are</h3>
                <h2>Pioneering the Future of Digital Innovation</h2>
                <p>
                  Founded in 2019, IFuture set out with a bold mission: to bring
                  the power of innovation to every corner of the digital world.
                  A team of passionate developers, designers, and tech
                  enthusiasts, IFuture was built on the belief that technology
                  should not only be functional but transformative. From the
                  very beginning, we focused on creating mobile applications and
                  websites that not only meet the needs of our clients but also
                  exceed expectations. Since our inception, IFuture has rapidly
                  grown into a recognized name in the tech industry. With a
                  diverse team well-versed in a wide array of cutting-edge
                  technologies, we've been able to deliver tailored digital
                  solutions that stand out in a competitive market. Whether it's
                  a sleek mobile app, a dynamic website, or an integrated
                  solution that pushes the boundaries of innovation, we’ve had
                  the privilege of working with over 100 customers worldwide.
                  Our dedication and commitment to excellence have paid off.
                  Some of the mobile apps we've developed have surpassed 10
                  million downloads, becoming global successes. These milestones
                  are not just numbers but a testament to the hard work,
                  creativity, and expertise that we pour into each project.
                  Every app we launch, every website we build, carries with it
                  the mark of our ambition to craft experiences that resonate
                  with users on a deeper level. As we continue to evolve and
                  grow, we remain committed to our core values: innovation,
                  quality, and customer satisfaction. At IFuture, we're not just
                  building apps and websites; we're shaping the future of
                  digital experiences for a world that’s always connected. This
                  is just the beginning. The future is ours to build, and we
                  invite you to be a part of it. Together, we can create
                  something extraordinary. Welcome to IFuture.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src="src/assets/img/about.jpg"
                className="img-fluid"
                alt="About IFuture"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="values" className="values section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Values</h2>
          <p>
            What we value most
            <br />
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <img
                  src="src/assets/img/values-1.png"
                  className="img-fluid"
                  alt="About IFuture"
                />
                <h3>Customer Satisfaction</h3>
                <p>
                  Our clients are at the heart of everything we do. We strive to
                  understand their unique needs and deliver solutions that not
                  only meet but exceed their expectations. Building strong,
                  lasting relationships is our priority, and we are committed to
                  ensuring every client is delighted with the results.
                </p>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card">
                <img
                  src="src/assets/img/values-2.png"
                  className="img-fluid"
                  alt="About IFuture"
                />
                <h3>Higher Performance</h3>
                <p>
                  We believe in delivering high-performance solutions that drive
                  success. Whether it's a website or mobile app, we focus on
                  optimizing speed, scalability, and responsiveness, ensuring
                  that users have a seamless and efficient experience every time
                  they interact with our products
                </p>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card">
                <img
                  src="src/assets/img/values-3.png"
                  className="img-fluid"
                  alt="About IFuture"
                />
                <h3>Security</h3>
                <p>
                  In today's digital world, security is paramount. We prioritize
                  building robust, secure applications and websites to protect
                  our clients' data and ensure their peace of mind. We implement
                  the latest security measures to safeguard against threats and
                  vulnerabilities, keeping both businesses and users safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default About;
