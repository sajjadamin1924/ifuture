import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import client1 from "../assets/img/clients/client1.png";
import client2 from "../assets/img/clients/client2.png";
import client3 from "../assets/img/clients/client3.png";
import client4 from "../assets/img/clients/client4.png";
import client5 from "../assets/img/clients/client5.png";
import client6 from "../assets/img/clients/client6.png";
import client7 from "../assets/img/clients/client7.png";
import client8 from "../assets/img/clients/client8.png";


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
              src={client1}
              className="img-fluid client-image"
              alt="Client 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={client2}
              className="img-fluid client-image"
              alt="Client 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={client3}
              className="img-fluid client-image"
              alt="Client 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={client4}
              className="img-fluid client-image"
              alt="Client 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={client5}
              className="img-fluid client-image"
              alt="Client 5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={client6}
              className="img-fluid client-image"
              alt="Client 6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={client7}
              className="img-fluid client-image"
              alt="Client 7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={client8}
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
