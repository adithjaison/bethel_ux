import React from "react";
import "./style.css";

const NextEvent = () => {
  return (
    <div className="next-event default-section-spacing background-primary">
      <div className="container">
        <div className="row align-items-center">
          <div className="flex-md-9">
            <div className="intro fancy-font">Next event</div>
            <div className="event">
              <div className="event__metas horizontal">
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
            </div>
            {/* .event ends */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-3">
            <div className="next-event__cta">
              <a href="events-single.html" className="button button-block-sm">
                Learn more
              </a>
            </div>
          </div>
          {/* .flex-* ends */}
        </div>
        {/* .row ends */}
      </div>
      {/* .container ends */}
    </div>
  );
};

export default NextEvent;
