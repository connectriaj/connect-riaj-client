import React from "react";
import "./Testimonials.css";
import image1 from "../../assets/avatar-3.svg";
import image2 from "../../assets/avatar-3.svg";
import image3 from "../../assets/avatar-3.svg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: image1,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
    },
    {
      id: 2,
      image: image2,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
    },
    {
      id: 3,
      image: image3,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
    },
  ];

  return (
    <div>
      <section className="testimonials container section" id="testimonials">
        <h2 className="section__title">Clients & Reviews</h2>
        <Swiper
          className="testimonials__container grid"
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {data.map(({ id, image, title, subtitle, comment }) => {
            return (
              <SwiperSlide className="testimonial__item" key={id}>
                <div className="thumbnail">
                  <img src={image} alt="user" />
                </div>
                <h3 className="testimonials__title text-center">{title}</h3>
                <p className="text-center">
                  <span className="subtitle">{subtitle}</span>
                </p>
                <div className="comment">{comment}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
