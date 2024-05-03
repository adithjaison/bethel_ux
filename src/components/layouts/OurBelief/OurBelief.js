import React from "react";

const OurBelief = () => {
  return (
    <section className="our-belief default-section-spacing text-center">
      <div className="container">
        <div className="section-heading">
          <span>Our belief</span>
          <h2>Our faith - what we believe</h2>
        </div>
        {/* .section-heading ends */}
        <div className="row">
          <div className="flex-md-6 flex-lg-3 mar-b-sm">
            <div className="our-belief__box">
              <div className="heading">
                <h3>The Bible</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, accusamus.
              </p>
            </div>
            {/* .our-belief__box ends */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3 mar-b-sm">
            <div className="our-belief__box">
              <div className="heading">
                <h3>The Holy Trinity</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, accusamus.
              </p>
            </div>
            {/* .our-belief__box ends */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3">
            <div className="our-belief__box">
              <div className="heading">
                <h3>The Blessed Hope</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, accusamus.
              </p>
            </div>
            {/* .our-belief__box ends */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3">
            <div className="our-belief__box">
              <div className="heading">
                <h3>Sanctification</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, accusamus.
              </p>
            </div>
            {/* .our-belief__box ends */}
          </div>
          {/* .flex-* ends */}
        </div>
        {/* .row ends */}
      </div>
      {/* .container ends */}
    </section>
  );
};

export default OurBelief;
