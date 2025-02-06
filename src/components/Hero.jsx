import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <>
     
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                IFuture: Shaping Tomorrow's Apps and Websites Innovating Digital
                Experiences for a Connected World
              </h1>
              <p data-aos="fade-up" data-aos-delay="100">
                We are team of talented developers to develop Mobile Apps,
                Websites
              </p>
              <div
                className="d-flex flex-column flex-md-row"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="#about" className="btn-get-started">
                  Get Started <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img
                src="src/assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
