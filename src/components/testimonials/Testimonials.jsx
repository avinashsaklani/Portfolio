import React from "react";

import "./testimonials.css";
import AVTR from "../../assets/pfp.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati, modi possimus sapiente exercitationem excepturi nam nesciunt repudiandae magni recusandae iusto? Repellendus et, nobis earum error ut hic at quas.",
  },
  {
    avatar: AVTR,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati, modi possimus sapiente exercitationem excepturi nam nesciunt repudiandae magni recusandae iusto? Repellendus et, nobis earum error ut hic at quas.",
  },
  {
    avatar: AVTR,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati, modi possimus sapiente exercitationem excepturi nam nesciunt repudiandae magni recusandae iusto? Repellendus et, nobis earum error ut hic at quas.",
  },
  {
    avatar: AVTR,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati, modi possimus sapiente exercitationem excepturi nam nesciunt repudiandae magni recusandae iusto? Repellendus et, nobis earum error ut hic at quas.",
  },
];
const Testimonials = () => {
  return (
    <div id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
