import React from "react";

const Subscription = () => {
  return (
    <div>
      <div className="subscription default-section-spacing background-lighter-gray">
        <div className="container">
          <div className="section-heading">
            <span>Stay in touch</span>
            <h2>Join our mailing list</h2>
          </div>
          {/* .section-heading ends */}
          <form action="#" className="form">
            <div className="row">
              <div className="flex-md-9">
                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Enter your valid email address"
                  />
                </div>
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-3">
                <button
                  type="submit"
                  className="button button-block-sm form__submit"
                >
                  Subscribe today
                </button>
              </div>
              {/* .flex-* ends */}
            </div>
            {/* .row ends */}
          </form>
          {/* .form ends */}
        </div>
        {/* .container ends */}
      </div>
    </div>
  );
};

export default Subscription;
