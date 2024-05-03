import React from "react";
import Post1 from "../../../assets/images/post-1@1.5x.jpg";
import Post2 from "../../../assets/images/post-2@1.5x.jpg";
import Post3 from "../../../assets/images/sermon-1@1.5x.jpg";
import "./style.css";

const articlesData = [
  {
    image: Post1,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Living for Christ requires boldness",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem."
  },
  {
    image: Post2,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Living in the last days as Christians",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem."
  },
  {
    image: Post3,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Understanding the Bible requires dedication",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem."
  }
  // Add more articles if needed
];

const Articles = () => {
  return (
    <div>
      <section className="recent-articles default-section-spacing text-center">
        <div className="container">
          <div className="section-heading">
            <span>Our blog</span>
            <h2>Fresh articles from our blog</h2>
          </div>
          <div className="row">
            {articlesData.map((article, index) => (
              <div className="flex-md-6 flex-lg-4" key={index}>
                <div className="card blog">
                  <div className="card__header">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="card__image blog__image"
                    />
                  </div>
                  <div className="card__footer">
                    <div className="blog__metas">
                      <div className="blog__meta--date meta">
                        <i className="ri-calendar-event-line" />{" "}
                        <span>{article.date}</span>
                      </div>
                      <div className="blog__meta--speaker meta">
                        <i className="ri-user-star-line" />{" "}
                        <span>{article.speaker}</span>
                      </div>
                    </div>
                    <div className="blog__title">
                      <h3>{article.title}</h3>
                    </div>
                    <div className="blog__content">
                      <div className="excerpt">
                        <p>{article.excerpt}</p>
                      </div>
                      <div className="blog__link">
                        <a href="blog-single.html" className="button">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
