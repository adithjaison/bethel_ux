import React from "react";
import Event1 from "../../../assets/images/event-1@1.5x.jpg";
import Sermon1 from "../../../assets/images/sermon-1@1.5x.jpg";
import Event2 from "../../../assets/images/event-2@1.5x.jpg";
import Event3 from "../../../assets/images/event-3@1.5x.jpg";

const eventData = [
  {
    image: Event1,
    date: "02/28/2020",
    time: "11:45 AM - 12:45 PM",
    location: "123 Jay St, Albany, NY 12203",
    title: "Scholarship fundraiser @GLC",
  },
  {
    image: Sermon1,
    date: "03/28/2020",
    time: "06:45 PM - 08:45 PM",
    location: "123 Jay St, Albany, NY 12203",
    title: "Bible study of end times (eschatology) begins @GLC",
  },
  {
    image: Event2,
    date: "04/28/2020",
    time: "11:45 AM - 01:45 PM",
    location: "123 Jay St, Albany, NY 12203",
    title: "Church anniversary luncheon @GLC",
  },
  {
    image: Event3,
    date: "05/28/2020",
    time: "11:45 AM - 12:45 PM",
    location: "123 Jay St, Albany, NY 12203",
    title: "Night prayer revival service @GLC",
  },
  {
    image: Event2,
    date: "04/28/2020",
    time: "11:45 AM - 01:45 PM",
    location: "123 Jay St, Albany, NY 12203",
    title: "Church anniversary luncheon @GLC",
  },
  {
    image: Event3,
    date: "05/28/2020",
    time: "11:45 AM - 12:45 PM",
    location: "123 Jay St, Albany, NY 12203",
    title: "Night prayer revival service @GLC",
  },
];

const AllEvents = () => {
  return (
    <div className="all-events default-section-spacing">
      <div className="container">
        <div className="section-heading text-center no-margin">
          <span>Events</span>
          <h2>Our events</h2>
        </div>
        <div className="search search-header default-section-spacing">
          <div className="row">
            <div className="flex-md-3 flex-lg-4">
              <div className="search__result">
                <div className="text leading uppercase bold">Results</div>
                <p>Showing {eventData.length} out of {eventData.length} events</p>
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
                      placeholder="Search for events..."
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
        <div className="all-events__events">
          <div className="row">
            {eventData.map((event, index) => (
              <div className="flex-md-6 flex-lg-4 mar-b-sm" key={index}>
                <div className="card card--event event">
                  <div className="card__header">
                    <img src={event.image} alt="" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="event__metas vertical">
                      <div className="event__meta--date meta">
                        <i className="ri-calendar-event-line" />{" "}
                        <span>{event.date}</span>
                      </div>
                      <div className="event__meta--time meta">
                        <i className="ri-time-line" />{" "}
                        <span>{event.time}</span>
                      </div>
                      <div className="event__meta--location meta">
                        <i className="ri-map-pin-line" />{" "}
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="event__title">
                      <h2>{event.title}</h2>
                    </div>
                    <div className="event__link">
                      <a href="events-single.html" className="button">
                        Learn more
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

export default AllEvents;
