import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const Clients = () => {
  return (
    <section id="clients" className="clients section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Clients</h2>
        <p>
          We work with the best clients
          <br />
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4, // Adjust as necessary
            },
          }}
        >
          <SwiperSlide>
            <img
              src="src/assets/img/clients/client-1.png"
              className="img-fluid client-image"
              alt="Client 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/img/clients/client-2.png"
              className="img-fluid client-image"
              alt="Client 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/img/clients/client-3.png"
              className="img-fluid client-image"
              alt="Client 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/img/clients/client-4.png"
              className="img-fluid client-image"
              alt="Client 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/img/clients/client-5.png"
              className="img-fluid client-image"
              alt="Client 5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/img/clients/client-6.png"
              className="img-fluid client-image"
              alt="Client 6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/img/clients/client-7.png"
              className="img-fluid client-image"
              alt="Client 7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/img/clients/client-8.png"
              className="img-fluid client-image"
              alt="Client 8"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
