import React from "react";
import Ministry1 from "../../../assets/images/ministry-1@1.5x.jpg";
import Ministry2 from "../../../assets/images/ministry-2@1.5x.jpg";
import Ministry3 from "../../../assets/images/ministry-3@1.5x.jpg";

const Ministries = () => {
  return (
    <div>
      <section className="our-ministries default-section-spacing background-lighter-gray">
        <div className="container">
          <div className="section-heading text-center">
            <span>Our ministries</span>
            <h2>Check out some of our ministries</h2>
          </div>
          {/* .section-heading ends */}
          <div className="row">
            <div className="flex-lg-6">
              <div className="card ministry">
                <div className="card__header">
                  <img
                    src={Ministry1}
                    alt="A man holding and reading the Holy Bible"
                    className="card__image ministry__image"
                  />
                </div>
                {/* .card__header ends */}
                <div className="card__footer">
                  <div className="ministry__title">
                    <h3>Men's ministry</h3>
                  </div>
                  <div className="ministry__meta">
                    <i className="ri-group-line" /> <span>14 Brothers</span>
                  </div>
                  <div className="ministry__content">
                    <div className="excerpt">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sint culpa totam laborum.
                      </p>
                    </div>
                    <div className="ministry__link">
                      <a href="ministries-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .ministry__content ends */}
                </div>
                {/* .card__footer ends */}
              </div>
              {/* .card ends */}
            </div>
            {/* .flex-* ends */}
            <div className="flex-lg-6">
              <div className="row mar-b-sm">
                <div className="flex-lg-12">
                  <div className="card ministry custom-height">
                    <div className="card__header">
                      <img
                        src={Ministry3}
                        alt="A little boy laughing while reading the Holy Bible"
                        className="card__image ministry__image"
                      />
                    </div>
                    {/* .card__header ends */}
                    <div className="card__footer">
                      <div className="ministry__title">
                        <h3>Children's ministry</h3>
                      </div>
                      <div className="ministry__meta">
                        <i className="ri-group-line" /> <span>26 Children</span>
                      </div>
                      <div className="ministry__content">
                        <div className="excerpt">
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Sint culpa totam laborum.
                          </p>
                        </div>
                        <div className="ministry__link">
                          <a href="ministries-single.html" className="button">
                            Learn more
                          </a>
                        </div>
                      </div>
                      {/* .ministry__content ends */}
                    </div>
                    {/* .card__footer ends */}
                  </div>
                  {/* .card ends */}
                </div>
                {/* .flex-* ends */}
              </div>
              {/* .rows */}
              <div className="row">
                <div className="flex-lg-12">
                  <div className="card ministry custom-height">
                    <div className="card__header">
                      <img
                        src={Ministry2}
                        alt="Young women praying"
                        className="card__image ministry__image"
                      />
                    </div>
                    {/* .card__header ends */}
                    <div className="card__footer">
                      <div className="ministry__title">
                        <h3>Women's ministry</h3>
                      </div>
                      <div className="ministry__meta">
                        <i className="ri-group-line" /> <span>12 Sisters</span>
                      </div>
                      <div className="ministry__content">
                        <div className="excerpt">
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Sint culpa totam laborum.
                          </p>
                        </div>
                        <div className="ministry__link">
                          <a href="ministries-single.html" className="button">
                            Learn more
                          </a>
                        </div>
                      </div>
                      {/* .ministry__content ends */}
                    </div>
                    {/* .card__footer ends */}
                  </div>
                  {/* .card ends */}
                </div>
                {/* .flex-* ends */}
              </div>
              {/* .rows */}
            </div>
            {/* .flex-* ends */}
          </div>
          {/* .row ends */}
        </div>
        {/* .container ends */}
      </section>
    </div>
  );
};

export default Ministries;
