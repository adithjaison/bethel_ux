import React from "react";
import User1 from "../../../assets/images/user-1.jpg";
import User2 from "../../../assets/images/user-2.jpg";
import User3 from "../../../assets/images/user-3.jpg";

import "./style.css";

const testimonialData = [
  {
    userImage: User1,
    userName: "George E. Pugh",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque animi, magni nisi dolorum nam debitis atque doloremque iure eaque mollitia. Autem cum explicabo libero voluptatum, at suscipit officia, dolore, quia sed cumque repudiandae quo voluptas fugiat laudantium doloribus reprehenderit. Nulla harum perspiciatis recusandae ratione possimus."
  },
  {
    userImage: User3,
    userName: "Nancy A. Austin",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque animi, magni nisi dolorum nam debitis atque doloremque iure eaque mollitia. Autem cum explicabo libero voluptatum, at suscipit officia, dolore, quia sed cumque repudiandae quo voluptas fugiat laudantium doloribus reprehenderit. Nulla harum perspiciatis recusandae ratione possimus."
  },
  {
    userImage: User2,
    userName: "Joe K. Liley",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque animi, magni nisi dolorum nam debitis atque doloremque iure eaque mollitia. Autem cum explicabo libero voluptatum, at suscipit officia, dolore, quia sed cumque repudiandae quo voluptas fugiat laudantium doloribus reprehenderit. Nulla harum perspiciatis recusandae ratione possimus."
  }
];

const Testimonials = () => {
  return (
    <div>
      <section className="our-testimonial default-section-spacing background-secondary">
        <div className="our-testimonial__background--cover" />
        <div className="our-testimonial__content">
          <div className="container">
            <div className="row align-items-center">
              <div className="flex-lg-5" />
              <div className="flex-lg-7">
                <div className="section-heading text-white">
                  <span>Testimonials</span>
                  <h2>What people are saying...</h2>
                </div>
                <div className="row">
                  {testimonialData.map((testimonial, index) => (
                    <div className="flex-md-6 flex-lg-12 mar-b-sm" key={index}>
                      <div className="testimonial">
                        <div className="testimonial__avatar">
                          <div className="card card--picture card--square testimonial__user">
                            <div className="card__header">
                              <img
                                src={testimonial.userImage}
                                alt={testimonial.userName}
                                className="card__image"
                              />
                            </div>
                            <div className="card__footer">
                              <div className="testimonial__author">
                                {testimonial.userName}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial__text text-white">
                          {testimonial.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
