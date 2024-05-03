import React from "react";
import Sermon1 from "../../../assets/images/sermon-1@1.5x.jpg";
import Sermon2 from "../../../assets/images/sermon-2@1.5x.jpg";
import Sermon3 from "../../../assets/images/sermon-3@1.5x.jpg";
import Sermon5 from "../../../assets/images/sermon-5@1.5x.jpg";
import Sermon4 from "../../../assets/images/sermon-4@1.5x.jpg";
import Sermon6 from "../../../assets/images/sermon-6@1.5x.jpg";

const sermonData = [
  {
    image: Sermon1,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Loving Jesus with all your heart, mind, and soul",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam laborum, aperiam iste sit tempore consequuntur voluptates quaerat animi molestias doloribus nobis numquam amet inventore nihil autem praesentium libero laudantium...",
  },
  {
    image: Sermon2,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Living the Christian life",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam laborum, aperiam iste sit tempore consequuntur voluptates quaerat animi molestias doloribus nobis numquam amet inventore nihil autem praesentium libero laudantium...",
  },
  {
    image: Sermon3,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Jesus is the Hope and Future",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam laborum, aperiam iste sit tempore consequuntur voluptates quaerat animi molestias doloribus nobis numquam amet inventore nihil autem praesentium libero laudantium...",
  },
  {
    image: Sermon5,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Are you truly born again?",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam laborum, aperiam iste sit tempore consequuntur voluptates quaerat animi molestias doloribus nobis numquam amet inventore nihil autem praesentium libero laudantium...",
  },
  {
    image: Sermon4,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Understanding God's Grace and Justice",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam laborum, aperiam iste sit tempore consequuntur voluptates quaerat animi molestias doloribus nobis numquam amet inventore nihil autem praesentium libero laudantium...",
  },
  {
    image: Sermon6,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Understanding the Bible and its prophecies",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam laborum, aperiam iste sit tempore consequuntur voluptates quaerat animi molestias doloribus nobis numquam amet inventore nihil autem praesentium libero laudantium...",
  },
];

const AllSermons = () => {
  return (
    <div className="all-sermons default-section-spacing">
      <div className="container">
        <div className="section-heading text-center no-margin">
          <span>Sermons</span>
          <h2>Our sermons</h2>
        </div>
        <div className="search search-header default-section-spacing">
          <div className="row">
            <div className="flex-md-3 flex-lg-4">
              <div className="search__result">
                <div className="text leading uppercase bold">Results</div>
                <p>Showing {sermonData.length} out of {sermonData.length} sermons</p>
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
                      placeholder="Search for sermons..."
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
        <div className="all-sermons__sermons">
          <div className="row">
            {sermonData.map((sermon, index) => (
              <div className="flex-md-6 flex-lg-4 mar-b-sm" key={index}>
                <div className="card sermon">
                  <div className="card__header">
                    <img src={sermon.image} alt="" className="card__image sermon__image" />
                  </div>
                  <div className="card__footer">
                    <div className="sermon__metas">
                      <div className="sermon__meta--date meta">
                        <i className="ri-calendar-event-line" />
                        <span>{sermon.date}</span>
                      </div>
                      <div className="sermon__meta--speaker meta">
                        <i className="ri-user-star-line" /> <span>{sermon.speaker}</span>
                      </div>
                    </div>
                    <div className="sermon__content">
                      <div className="title">
                        <h3>{sermon.title}</h3>
                      </div>
                      <div className="excerpt">
                        <p>{sermon.description}</p>
                      </div>
                    </div>
                    <div className="sermon__link">
                      <a href="sermons-single.html" className="button">
                        Read more
                      </a>
                    </div>
                    <div className="sermon__download">
                      <span className="text-white">Download</span>
                      <a href="/">
                        <i className="ri-video-line" />
                      </a>
                      <a href="/">
                        <i className="ri-headphone-line" />
                      </a>
                      <a href="/">
                        <i className="ri-file-pdf-line" />
                      </a>
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

export default AllSermons;
