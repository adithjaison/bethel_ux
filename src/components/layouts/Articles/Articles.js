import React from "react";
import Post1 from "../../../assets/images/post-1@1.5x.jpg";
import Post2 from "../../../assets/images/post-2@1.5x.jpg";
import Post3 from "../../../assets/images/sermon-1@1.5x.jpg";

const Articles = () => {
  return (
    <div>
      <section className="recent-articles default-section-spacing text-center">
        <div className="container">
          <div className="section-heading">
            <span>Our blog</span>
            <h2>Fresh articles from our blog</h2>
          </div>
          {/* .section-heading ends */}
          <div className="row">
            <div className="flex-md-6 flex-lg-4">
              <div className="card blog">
                <div className="card__header">
                  <img
                    src={Post1}
                    alt="A man praying standing"
                    className="card__image blog__image"
                  />
                </div>
                {/* .card__header ends */}
                <div className="card__footer">
                  <div className="blog__metas">
                    <div className="blog__meta--date meta">
                      <i className="ri-calendar-event-line" />{" "}
                      <span>02/28/2020</span>
                    </div>
                    <div className="blog__meta--speaker meta">
                      <i className="ri-user-star-line" />{" "}
                      <span>Pastor Erik B. Hogan</span>
                    </div>
                  </div>
                  {/* .blog__metas */}
                  <div className="blog__title">
                    <h3>Living for Christ requires boldness</h3>
                  </div>
                  <div className="blog__content">
                    <div className="excerpt">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Debitis excepturi sunt doloribus consequuntur
                        eveniet nostrum dicta, voluptate enim rem voluptatem.
                      </p>
                    </div>
                    <div className="blog__link">
                      <a href="blog-single.html" className="button">
                        Read more
                      </a>
                    </div>
                  </div>
                  {/* .blog__content ends */}
                </div>
                {/* .card__footer ends */}
              </div>
              {/* .card ends */}
            </div>
            {/* .flex-* ends */}
            <div className="flex-md-6 flex-lg-4">
              <div className="card blog">
                <div className="card__header">
                  <img
                    src={Post2}
                    alt="Women praying"
                    className="card__image blog__image"
                  />
                </div>
                {/* .card__header ends */}
                <div className="card__footer">
                  <div className="blog__metas">
                    <div className="blog__meta--date meta">
                      <i className="ri-calendar-event-line" />{" "}
                      <span>02/28/2020</span>
                    </div>
                    <div className="blog__meta--speaker meta">
                      <i className="ri-user-star-line" />{" "}
                      <span>Pastor Erik B. Hogan</span>
                    </div>
                  </div>
                  {/* .blog__metas */}
                  <div className="blog__title">
                    <h3>Living in the last days as Christians</h3>
                  </div>
                  <div className="blog__content">
                    <div className="excerpt">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Debitis excepturi sunt doloribus consequuntur
                        eveniet nostrum dicta, voluptate enim rem voluptatem.
                      </p>
                    </div>
                    <div className="blog__link">
                      <a href="blog-single.html" className="button">
                        Read more
                      </a>
                    </div>
                  </div>
                  {/* .blog__content ends */}
                </div>
                {/* .card__footer ends */}
              </div>
              {/* .card ends */}
            </div>
            {/* .flex-* ends */}
            <div className="flex-md-12 flex-lg-4">
              <div className="card blog">
                <div className="card__header">
                  <img
                    src={Post3}
                    alt="A man reading the Holy Bible"
                    className="card__image blog__image"
                  />
                </div>
                {/* .card__header ends */}
                <div className="card__footer">
                  <div className="blog__metas">
                    <div className="blog__meta--date meta">
                      <i className="ri-calendar-event-line" />{" "}
                      <span>02/28/2020</span>
                    </div>
                    <div className="blog__meta--speaker meta">
                      <i className="ri-user-star-line" />{" "}
                      <span>Pastor Erik B. Hogan</span>
                    </div>
                  </div>
                  {/* .blog__metas */}
                  <div className="blog__title">
                    <h3>Understanding the Bible requires dedication</h3>
                  </div>
                  <div className="blog__content">
                    <div className="excerpt">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Debitis excepturi sunt doloribus consequuntur
                        eveniet nostrum dicta, voluptate enim rem voluptatem.
                      </p>
                    </div>
                    <div className="blog__link">
                      <a href="blog-single.html" className="button">
                        Read more
                      </a>
                    </div>
                  </div>
                  {/* .blog__content ends */}
                </div>
                {/* .card__footer ends */}
              </div>
              {/* .card ends */}
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

export default Articles;
