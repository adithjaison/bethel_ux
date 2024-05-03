import React from "react";

const OurStats = () => {
  return (
    <section className="our-stats text-center">
      <div className="container">
        <div className="row">
          <div className="flex-md-6 flex-lg-3 mar-b-sm">
            <div className="our-stats__box">
              <div className="heading">
                <div>1995</div>
              </div>
              <h3>Year built</h3>
            </div>
            {/* .our-stats__box ends */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3 mar-b-sm">
            <div className="our-stats__box">
              <div className="heading">
                <div>25,000</div>
              </div>
              <h3>Members</h3>
            </div>
            {/* .our-stats__box ends */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3">
            <div className="our-stats__box">
              <div className="heading">
                <div>$584K</div>
              </div>
              <h3>Given in scholarship</h3>
            </div>
            {/* .our-stats__box ends */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3">
            <div className="our-stats__box">
              <div className="heading">
                <div>56</div>
              </div>
              <h3>Ministries</h3>
            </div>
            {/* .our-stats__box ends */}
          </div>
          {/* .flex-* ends */}
        </div>
        {/* .row ends */}
      </div>
      {/* .container ends */}
    </section>
  );
};

export default OurStats;
