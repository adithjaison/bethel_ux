import React from "react";
import Banner from "../../layouts/Banner/Banner";
import TimeLocation from "../../layouts/TimeLocation/TimeLocation";
import Event1 from "../../../assets/images/event-1@1.5x.jpg";
import Sermon1 from "../../../assets/images/sermon-1@1.5x.jpg";
import Event2 from "../../../assets/images/event-2@1.5x.jpg";
import Event3 from "../../../assets/images/event-3@1.5x.jpg";

const Events = () => {
  return (
    <>
      {/* BANNER SECTION STARTS */}
      <Banner BannerHeader="Events" />
      {/* BANNER SECTION ENDS */}
      {/* ALL EVENTS SECTION STARTS */}
      <div className="all-events default-section-spacing">
        <div className="container">
          <div className="section-heading text-center no-margin">
            <span>Events</span>
            <h2>Our events</h2>
          </div>
          {/* .section-heading ends */}
          <div className="search search-header default-section-spacing">
            <div className="row">
              <div className="flex-md-3 flex-lg-4">
                <div className="search__result">
                  <div className="text leading uppercase bold">Results</div>
                  <p>Showing 6 out of 24 events</p>
                </div>
              </div>
              {/* .flex-* ends */}
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
                    {/* .form__group ends */}
                    <div>
                      <button type="submit" className="button">
                        Search
                      </button>
                    </div>
                  </div>
                  {/* .display-flex ends */}
                </form>
                {/* .form ends */}
              </div>
              {/* .flex-* ends */}
            </div>
            {/* .row ends */}
          </div>
          <div className="all-events__events">
            <div className="row">
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card card--event event">
                  <div className="card__header">
                    <img src={Event1} alt="" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="event__metas vertical">
                      <div className="event__meta--date meta">
                        <i className="ri-calendar-event-line" />{" "}
                        <span>02/28/2020</span>
                      </div>
                      <div className="event__meta--time meta">
                        <i className="ri-time-line" />{" "}
                        <span>11:45 AM - 12:45 PM</span>
                      </div>
                      <div className="event__meta--location meta">
                        <i className="ri-map-pin-line" />{" "}
                        <span>123 Jay St, Albany, NY 12203</span>
                      </div>
                    </div>
                    {/* .event__metas */}
                    <div className="event__title">
                      <h2>Scholarship fundraiser @GLC</h2>
                    </div>
                    <div className="event__link">
                      <a href="events-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card card--event event">
                  <div className="card__header">
                    <img src={Sermon1} alt="" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="event__metas vertical">
                      <div className="event__meta--date meta">
                        <i className="ri-calendar-event-line" />{" "}
                        <span>03/28/2020</span>
                      </div>
                      <div className="event__meta--time meta">
                        <i className="ri-time-line" />{" "}
                        <span>06:45 PM - 08:45 PM</span>
                      </div>
                      <div className="event__meta--location meta">
                        <i className="ri-map-pin-line" />{" "}
                        <span>123 Jay St, Albany, NY 12203</span>
                      </div>
                    </div>
                    {/* .event__metas */}
                    <div className="event__title">
                      <h2>
                        Bible study of end times (eschatology) begins @GLC
                      </h2>
                    </div>
                    <div className="event__link">
                      <a href="events-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card card--event event">
                  <div className="card__header">
                    <img src={Event2} alt="" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="event__metas vertical">
                      <div className="event__meta--date meta">
                        <i className="ri-calendar-event-line" />{" "}
                        <span>04/28/2020</span>
                      </div>
                      <div className="event__meta--time meta">
                        <i className="ri-time-line" />{" "}
                        <span>11:45 AM - 01:45 PM</span>
                      </div>
                      <div className="event__meta--location meta">
                        <i className="ri-map-pin-line" />{" "}
                        <span>123 Jay St, Albany, NY 12203</span>
                      </div>
                    </div>
                    {/* .event__metas */}
                    <div className="event__title">
                      <h2>Church anniversary luncheon @GLC</h2>
                    </div>
                    <div className="event__link">
                      <a href="events-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="card card--event event">
                  <div className="card__header">
                    <img src={Event3} alt="" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="event__metas vertical">
                      <div className="event__meta--date meta">
                        <i className="ri-calendar-event-line" />{" "}
                        <span>05/28/2020</span>
                      </div>
                      <div className="event__meta--time meta">
                        <i className="ri-time-line" />{" "}
                        <span>11:45 AM - 12:45 PM</span>
                      </div>
                      <div className="event__meta--location meta">
                        <i className="ri-map-pin-line" />{" "}
                        <span>123 Jay St, Albany, NY 12203</span>
                      </div>
                    </div>
                    {/* .event__metas */}
                    <div className="event__title">
                      <h2>Night prayer revival service @GLC</h2>
                    </div>
                    <div className="event__link">
                      <a href="events-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="card card--event event">
                  <div className="card__header">
                    <img src={Event2} alt="" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="event__metas vertical">
                      <div className="event__meta--date meta">
                        <i className="ri-calendar-event-line" />{" "}
                        <span>04/28/2020</span>
                      </div>
                      <div className="event__meta--time meta">
                        <i className="ri-time-line" />{" "}
                        <span>11:45 AM - 01:45 PM</span>
                      </div>
                      <div className="event__meta--location meta">
                        <i className="ri-map-pin-line" />{" "}
                        <span>123 Jay St, Albany, NY 12203</span>
                      </div>
                    </div>
                    {/* .event__metas */}
                    <div className="event__title">
                      <h2>Church anniversary luncheon @GLC</h2>
                    </div>
                    <div className="event__link">
                      <a href="events-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="card card--event event">
                  <div className="card__header">
                    <img src={Sermon1} alt="" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="event__metas vertical">
                      <div className="event__meta--date meta">
                        <i className="ri-calendar-event-line" />{" "}
                        <span>03/28/2020</span>
                      </div>
                      <div className="event__meta--time meta">
                        <i className="ri-time-line" />{" "}
                        <span>06:45 PM - 08:45 PM</span>
                      </div>
                      <div className="event__meta--location meta">
                        <i className="ri-map-pin-line" />{" "}
                        <span>123 Jay St, Albany, NY 12203</span>
                      </div>
                    </div>
                    {/* .event__metas */}
                    <div className="event__title">
                      <h2>
                        Bible study of end times (eschatology) begins @GLC
                      </h2>
                    </div>
                    <div className="event__link">
                      <a href="events-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
            </div>
            {/* .row ends */}
          </div>
          {/* .all-events__events ends */}
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
          {/* .pagination ends */}
        </div>
        {/* .container ends */}
      </div>
      {/* .all-events ends */}
      {/* ALL EVENTS SECTION ENDS */}
      {/* TIME AND LOCATION STARTS */}
      <TimeLocation />
      {/* TIME AND LOCATION ENDS */}
    </>
  );
};

export default Events;
