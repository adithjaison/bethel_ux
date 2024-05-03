import React from "react";
import Ministry1 from "../../../assets/images/ministry-1@1.5x.jpg";
import Ministry3 from "../../../assets/images/ministry-3@1.5x.jpg";
import Ministry2 from "../../../assets/images/ministry-2@1.5x.jpg";
import Ministry4 from "../../../assets/images/ministry-4@1.5x.jpg";
import Ministry5 from "../../../assets/images/ministry-5@1.5x.jpg";
import Ministry6 from "../../../assets/images/ministry-6@1.5x.jpg";

const ministryData = [
  {
    image: Ministry1,
    title: "Men's ministry",
    members: "14 Brothers",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.",
  },
  {
    image: Ministry3,
    title: "Children's ministry",
    members: "26 Children",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.",
  },
  {
    image: Ministry2,
    title: "Women's ministry",
    members: "12 Sisters",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.",
  },
  {
    image: Ministry4,
    title: "Homeless outreach ministry",
    members: "14 Members",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.",
  },
  {
    image: Ministry5,
    title: "Women's choir",
    members: "12 Sisters",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.",
  },
  {
    image: Ministry6,
    title: "Men's choir",
    members: "10 Brothers",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa totam laborum.",
  },
];

const AllMinistries = () => {
  return (
    <div className="all-ministries default-section-spacing">
      <div className="container">
        <div className="section-heading text-center no-margin">
          <span>Ministries</span>
          <h2>Our ministries</h2>
        </div>
        <div className="search search-header default-section-spacing">
          <div className="row">
            <div className="flex-md-3 flex-lg-4">
              <div className="search__result">
                <div className="text leading uppercase bold">Results</div>
                <p>Showing {ministryData.length} out of {ministryData.length} ministries</p>
              </div>
            </div>
            <div className="flex-md-9 flex-lg-8">
              <div className="search__search">
                <div className="text leading uppercase bold">Search</div>
              </div>
              <form action="#" className="form search__form">
                <div className="display-flex">
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Search for ministries..."
                    />
                  </div>
                  <div>
                    <button type="submit" className="button">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="all-ministries__ministries">
          <div className="row">
            {ministryData.map((ministry, index) => (
              <div className="flex-md-6 flex-lg-4 mar-b-sm" key={index}>
                <div className="card ministry">
                  <div className="card__header">
                    <img src={ministry.image} alt={ministry.title} className="card__image ministry__image" />
                  </div>
                  <div className="card__footer">
                    <div className="ministry__title">
                      <h3>{ministry.title}</h3>
                    </div>
                    <div className="ministry__meta">
                      <i className="ri-group-line" /> <span>{ministry.members}</span>
                    </div>
                    <div className="ministry__content">
                      <div className="excerpt">
                        <p>{ministry.description}</p>
                      </div>
                      <div className="ministry__link">
                        <a href="ministries-single.html" className="button">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <span className="pagination__arrow">
            <a href="/">
              <i className="ri-arrow-left-s-line" />
            </a>
          </span>
          <span className="pagination__number">
            <a href="/">1</a>
          </span>
          <span className="pagination__number active">
            <a href="/">2</a>
          </span>
          <span className="pagination__number">
            <a href="/">3</a>
          </span>
          <span className="pagination__arrow">
            <a href="/">
              <i className="ri-arrow-right-s-line" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AllMinistries;
