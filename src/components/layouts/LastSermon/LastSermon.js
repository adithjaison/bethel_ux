import React from "react";
import AOS from 'aos';
import Sermon1 from "../../../assets/images/sermon-1@1.5x.jpg";
import "./style.css"

const LastSermon = () => {
  React.useEffect(() => {
    AOS.init({ once: true });
    setupScrollToTop();
  }, []);
  const setupScrollToTop = () => {
    const scrollTopEl = document.querySelector(".scroll-to-top");
    if (!scrollTopEl) return;

    window.addEventListener("scroll", () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrolledPerc = Math.floor((scrollable * 50) / 100);

      if (scrolled >= scrolledPerc) {
        scrollTopEl.classList.add("active");
      } else {
        scrollTopEl.classList.remove("active");
      }
    });

    scrollTopEl.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  };
  return (
    <section className="last-sermon default-section-spacing">
      <div className="container">
        <div className="row align-items-center">
          <div className="flex-md-6 flex-lg-5">
            {/* Using Animate On Scroll (AOS) plugin on the card */}
            <div
              className="card sermon"
              data-aos="fade-up"
              data-aos-offset={400}
            >
              <div className="card__header">
                <img
                  src={Sermon1}
                  alt="A man reading the Holy Bible"
                  className="card__image sermon__image"
                />
              </div>
              {/* .card__header ends */}
              <div className="card__footer">
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
              {/* .card__footer ends */}
            </div>
            {/* .card ends */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-7">
            {/* Using Animate On Scroll (AOS) plugin again here */}
            <div
              className="last-sermon__content"
              data-aos="fade-up"
              data-aos-offset={300}
              data-aos-delay={300}
            >
              <div className="section-heading">
                <span>Sermons</span>
                <h2>Last week sermon</h2>
              </div>
              {/* .section-heading ends */}
              <div className="sermon__metas">
                <div className="sermon__meta--date meta">
                  <i className="ri-calendar-event-line" />{" "}
                  <span>02/28/2020</span>
                </div>
                <div className="sermon__meta--speaker meta">
                  <i className="ri-user-star-line" />{" "}
                  <span>Pastor Erik B. Hogan</span>
                </div>
              </div>
              {/* .sermon__metas */}
              <div className="sermon__content">
                <div className="title">
                  <h3>Loving Jesus with all your heart, mind, and soul</h3>
                </div>
                <div className="excerpt">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Totam laborum, aperiam iste sit tempore consequuntur
                    voluptates quaerat animi molestias doloribus nobis numquam
                    amet inventore nihil autem praesentium libero laudantium.
                    Possimus, maiores, eius ipsum beatae numquam nemo cum
                    officiis, veniam quidem quibusdam impedit inventore rem. Hic
                    ea eligendi voluptate commodi quo...
                  </p>
                </div>
              </div>
              <div className="sermon__link">
                <a href="sermons-single.html" className="button">
                  Read more
                </a>
              </div>
            </div>
            {/* .last-sermon__content ends */}
          </div>
          {/* .flex-* ends */}
        </div>
        {/* .row ends */}
      </div>
      {/* .container ends */}
    </section>
  );
};

export default LastSermon;
