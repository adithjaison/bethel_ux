import React from "react";
import Pastor from "../../../assets/images/pastor@1.5x.jpg";

const OurPastor = () => {
  return (
    <section className="our-pastor default-section-spacing">
      <div className="container">
        <div className="row align-items-center">
          <div className="flex-md-6 flex-lg-7">
            <div className="our-pastor__content">
              <div className="section-heading">
                <span>Our pastor</span>
                <h2>Meet our pastor</h2>
              </div>
              {/* .section-heading ends */}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                laborum, aperiam iste sit tempore consequuntur voluptates
                quaerat animi molestias doloribus nobis numquam amet inventore
                nihil autem praesentium libero laudantium. Possimus, maiores,
                eius ipsum beatae numquam nemo cum officiis.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                laborum, aperiam iste sit tempore consequuntur voluptates
                quaerat animi molestias doloribus nobis numquam amet inventore
                nihil autem praesentium libero laudantium. Possimus, maiores,
                eius ipsum beatae numquam nemo cum officiis, veniam quidem
                quibusdam impedit inventore rem.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                laborum, aperiam iste sit tempore consequuntur voluptates
                quaerat animi molestias doloribus nobis numquam amet inventore
                nihil autem praesentium libero laudantium. Possimus, maiores,
                eius ipsum beatae numquam nemo cum officiis.
              </p>
            </div>
            {/* .our-pastor__content ends */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-5">
            <div className="card card--picture staff">
              <div className="card__header">
                <img src={Pastor} alt="A man" className="card__image" />
              </div>
              {/* .card__header ends */}
              <div className="card__footer">
                <div className="staff__name">
                  <h3>Erik B. Hogan</h3>
                </div>
              </div>
            </div>
            {/* .card ends */}
          </div>
          {/* .flex-* ends */}
        </div>
        {/* .row ends */}
      </div>
      {/* .container ends */}
    </section>
  );
};

export default OurPastor;
