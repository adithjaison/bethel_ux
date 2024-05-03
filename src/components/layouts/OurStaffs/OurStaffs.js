import React from "react";
import Staff1 from "../../../assets/images/staff-1@1.5x.jpg";
import Staff2 from "../../../assets/images/staff-2@1.5x.jpg";
import Staff3 from "../../../assets/images/staff-3@1.5x.jpg";
import Staff4 from "../../../assets/images/staff-4@1.5x.jpg";
import Staff5 from "../../../assets/images/staff-5@1.5x.jpg";
import Staff6 from "../../../assets/images/staff-6@1.5x.jpg";

const OurStaffs = () => {
  return (
    <section className="our-staffs default-section-spacing text-center background-lighter-gray">
      <div className="container">
        <div className="section-heading text-center">
          <span>Our staffs</span>
          <h2>Meet some of our friendly staffs</h2>
        </div>
        {/* .section-heading ends */}
        <div className="row">
          <div className="flex-md-6 flex-lg-4 mar-b-sm">
            <div className="card card--picture staff">
              <div className="card__header">
                <img src={Staff1} alt="A man" className="card__image" />
              </div>
              <div className="card__footer">
                <div className="staff__name">
                  <h3>Walter L. Brown</h3>
                </div>
                <div className="staff__title">Assistant pastor</div>
                <div className="staff__link">
                  <a href="staffs-single.html" className="button">
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
            <div className="card card--picture staff">
              <div className="card__header">
                <img src={Staff2} alt="A man" className="card__image" />
              </div>
              <div className="card__footer">
                <div className="staff__name">
                  <h3>Maryanne G. Crum</h3>
                </div>
                <div className="staff__title">Worship leader</div>
                <div className="staff__link">
                  <a href="staffs-single.html" className="button">
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
            <div className="card card--picture staff">
              <div className="card__header">
                <img src={Staff3} alt="A man" className="card__image" />
              </div>
              <div className="card__footer">
                <div className="staff__name">
                  <h3>Clarence C. Laughlin</h3>
                </div>
                <div className="staff__title">Usher</div>
                <div className="staff__link">
                  <a href="staffs-single.html" className="button">
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
            <div className="card card--picture staff">
              <div className="card__header">
                <img src={Staff4} alt="A man" className="card__image" />
              </div>
              <div className="card__footer">
                <div className="staff__name">
                  <h3>Katrina A. Compton</h3>
                </div>
                <div className="staff__title">Assistant pastor</div>
                <div className="staff__link">
                  <a href="staffs-single.html" className="button">
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
            <div className="card card--picture staff">
              <div className="card__header">
                <img src={Staff5} alt="A man" className="card__image" />
              </div>
              <div className="card__footer">
                <div className="staff__name">
                  <h3>Matthew T. Chronister</h3>
                </div>
                <div className="staff__title">Worship leader</div>
                <div className="staff__link">
                  <a href="staffs-single.html" className="button">
                    Learn more
                  </a>
                </div>
              </div>
              {/* .card__footer ends */}
            </div>
            {/* .card ends */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-4 no-margin">
            {/* the "no-margin" class here remove the margin-top on medium devices such as tablet portrait */}
            <div className="card card--picture staff">
              <div className="card__header">
                <img src={Staff6} alt="A man" className="card__image" />
              </div>
              <div className="card__footer">
                <div className="staff__name">
                  <h3>Sandy T. Cox</h3>
                </div>
                <div className="staff__title">Usher</div>
                <div className="staff__link">
                  <a href="staffs-single.html" className="button">
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
    </section>
  );
};

export default OurStaffs;
