import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section className="our-testimonial default-section-spacing background-secondary">
        <div className="our-testimonial__background--cover" />
        {/* .our-testimonial__background--cover ends */}
        <div className="our-testimonial__content">
          <div className="container">
            <div className="row align-items-center">
              <div className="flex-lg-5" />
              <div className="flex-lg-7">
                <div className="section-heading text-white">
                  <span>Testimonials</span>
                  <h2>What people are saying...</h2>
                </div>
                {/* .section-heading ends */}
                <div className="row">
                  <div className="flex-md-6 flex-lg-12 mar-b-sm">
                    <div className="testimonial">
                      <div className="testimonial__avatar">
                        <div className="card card--picture card--square testimonial__user">
                          <div className="card__header">
                            <img
                              src="images/user-1.jpg"
                              alt="A man"
                              className="card__image"
                            />
                          </div>
                          {/* .card__header ends */}
                          <div className="card__footer">
                            <div className="testimonial__author">
                              George E. Pugh
                            </div>
                          </div>
                          {/* .card__footer ends */}
                        </div>
                        {/* .card */}
                      </div>
                      {/* .testimonial__avatar ends */}
                      <div className="testimonial__text text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Itaque animi, magni nisi dolorum nam debitis atque
                        doloremque iure eaque mollitia. Autem cum explicabo
                        libero voluptatum, at suscipit officia, dolore, quia sed
                        cumque repudiandae quo voluptas fugiat laudantium
                        doloribus reprehenderit. Nulla harum perspiciatis
                        recusandae ratione possimus.
                      </div>
                    </div>
                    {/* .testimonial */}
                  </div>
                  {/* .flex-* ends */}
                  <div className="flex-md-6 flex-lg-12 mar-b-sm">
                    <div className="testimonial">
                      <div className="testimonial__avatar">
                        <div className="card card--picture card--square testimonial__user">
                          <div className="card__header">
                            <img
                              src="images/user-3.jpg"
                              alt="A woman"
                              className="card__image"
                            />
                          </div>
                          {/* .card__header ends */}
                          <div className="card__footer">
                            <div className="testimonial__author">
                              Nancy A. Austin
                            </div>
                          </div>
                          {/* .card__footer ends */}
                        </div>
                        {/* .card */}
                      </div>
                      {/* .testimonial__avatar ends */}
                      <div className="testimonial__text text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Itaque animi, magni nisi dolorum nam debitis atque
                        doloremque iure eaque mollitia. Autem cum explicabo
                        libero voluptatum, at suscipit officia, dolore, quia sed
                        cumque repudiandae quo voluptas fugiat laudantium
                        doloribus reprehenderit. Nulla harum perspiciatis
                        recusandae ratione possimus.
                      </div>
                    </div>
                    {/* .testimonial */}
                  </div>
                  {/* .flex-* ends */}
                  <div className="flex-md-12 flex-lg-12">
                    <div className="testimonial">
                      <div className="testimonial__avatar">
                        <div className="card card--picture card--square testimonial__user">
                          <div className="card__header">
                            <img
                              src="images/user-2.jpg"
                              alt="A man"
                              className="card__image"
                            />
                          </div>
                          {/* .card__header ends */}
                          <div className="card__footer">
                            <div className="testimonial__author">
                              Joe K. Liley
                            </div>
                          </div>
                          {/* .card__footer ends */}
                        </div>
                        {/* .card */}
                      </div>
                      {/* .testimonial__avatar ends */}
                      <div className="testimonial__text text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Itaque animi, magni nisi dolorum nam debitis atque
                        doloremque iure eaque mollitia. Autem cum explicabo
                        libero voluptatum, at suscipit officia, dolore, quia sed
                        cumque repudiandae quo voluptas fugiat laudantium
                        doloribus reprehenderit. Nulla harum perspiciatis
                        recusandae ratione possimus.
                      </div>
                    </div>
                    {/* .testimonial */}
                  </div>
                  {/* .flex-* ends */}
                </div>
                {/* .row ends */}
              </div>
              {/* .flex-* ends */}
            </div>
            {/* .row ends */}
          </div>
          {/* .container ends */}
        </div>
        {/* .our-testimonial__content ends */}
      </section>
    </div>
  );
};

export default Testimonials;
