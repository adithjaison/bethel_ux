import React from "react";

const TimeLocation = () => {
  return (
    <div>
      <section className="time-location">
        <div className="container">
          <div className="row">
            <div className="flex-lg-6">
              <div className="time-location__content default-section-spacing">
                <div className="section-heading">
                  <span>Time and location</span>
                  <h2>Come and worship with us</h2>
                </div>
                {/* .section-heading ends */}
                <div className="time-location__time">
                  <div className="info">
                    <div className="day bold">Sunday:</div>
                    <div className="time">
                      <span>9:00 am - 10:30 am (Sunday school)</span>
                      <span>11:00 am - 1:30 pm (Morning service)</span>
                      <span>4:00 pm - 5:30 pm (Evening service)</span>
                    </div>
                  </div>
                  <div className="info">
                    <div className="location bold">Location:</div>
                    <div className="location-info">
                      <span>123 Jay St, Albany, NY 12203</span>
                    </div>
                  </div>
                </div>
                {/* .time-location__time ends */}
              </div>
            </div>
            {/* .flex-* ends */}
          </div>
          {/* .row ends */}
        </div>
        {/* .container ends */}
        <div className="time-location__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.500392314035!2d-73.76198333429348!3d42.650750424686215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0a3cdc54f8b3%3A0x369f717b85d43cfc!2sMadison%20Ave%20%26%20Empire%20State%20Plaza!5e0!3m2!1sen!2sus!4v1583133727681!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen=""
          />
        </div>
      </section>
    </div>
  );
};

export default TimeLocation;
