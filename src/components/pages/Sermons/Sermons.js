import React from "react";
import Banner from "../../layouts/Banner/Banner";
import TimeLocation from "../../layouts/TimeLocation/TimeLocation";
import Sermon1 from "../../../assets/images/sermon-1@1.5x.jpg";
import Sermon2 from "../../../assets/images/sermon-2@1.5x.jpg";
import Sermon3 from "../../../assets/images/sermon-3@1.5x.jpg";
import Sermon5 from "../../../assets/images/sermon-5@1.5x.jpg";
import Sermon4 from "../../../assets/images/sermon-4@1.5x.jpg";
import Sermon6 from "../../../assets/images/sermon-6@1.5x.jpg";
const Sermons = () => {
  return (
    <>
      {/* BANNER SECTION STARTS */}
      <Banner BannerHeader="Sermons" />
      {/* BANNER SECTION ENDS */}
      {/* ALL SERMONS SECTION STARTS */}
      <div className="all-sermons default-section-spacing">
        <div className="container">
          <div className="section-heading text-center no-margin">
            <span>Sermons</span>
            <h2>Our sermons</h2>
          </div>
          {/* .section-heading ends */}
          <div className="search search-header default-section-spacing">
            <div className="row">
              <div className="flex-md-3 flex-lg-4">
                <div className="search__result">
                  <div className="text leading uppercase bold">Results</div>
                  <p>Showing 6 out of 24 sermons</p>
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
                        placeholder="Search for sermons..."
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
          <div className="all-sermons__sermons">
            <div className="row">
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card sermon">
                  <div className="card__header">
                    <img
                      src={Sermon1}
                      alt="A man reading the Holy Bible"
                      className="card__image sermon__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="sermon__metas">
                      <div className="sermon__meta--date meta">
                        <i className="ri-calendar-event-line" />
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
                        <h3>
                          Loving Jesus with all your heart, mind, and soul
                        </h3>
                      </div>
                      <div className="excerpt">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Totam laborum, aperiam iste sit tempore
                          consequuntur voluptates quaerat animi molestias
                          doloribus nobis numquam amet inventore nihil autem
                          praesentium libero laudantium...
                        </p>
                      </div>
                    </div>
                    <div className="sermon__link">
                      <a href="sermons-single.html" className="button">
                        Read more
                      </a>
                    </div>
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
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card sermon">
                  <div className="card__header">
                    <img
                      src={Sermon2}
                      alt="A man reading the Holy Bible"
                      className="card__image sermon__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="sermon__metas">
                      <div className="sermon__meta--date meta">
                        <i className="ri-calendar-event-line" />
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
                        <h3>Living the Christian life</h3>
                      </div>
                      <div className="excerpt">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Totam laborum, aperiam iste sit tempore
                          consequuntur voluptates quaerat animi molestias
                          doloribus nobis numquam amet inventore nihil autem
                          praesentium libero laudantium...
                        </p>
                      </div>
                    </div>
                    <div className="sermon__link">
                      <a href="sermons-single.html" className="button">
                        Read more
                      </a>
                    </div>
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
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card sermon">
                  <div className="card__header">
                    <img
                      src={Sermon3}
                      alt=""
                      className="card__image sermon__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="sermon__metas">
                      <div className="sermon__meta--date meta">
                        <i className="ri-calendar-event-line" />
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
                        <h3>Jesus is the Hope and Future</h3>
                      </div>
                      <div className="excerpt">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Totam laborum, aperiam iste sit tempore
                          consequuntur voluptates quaerat animi molestias
                          doloribus nobis numquam amet inventore nihil autem
                          praesentium libero laudantium...
                        </p>
                      </div>
                    </div>
                    <div className="sermon__link">
                      <a href="sermons-single.html" className="button">
                        Read more
                      </a>
                    </div>
                    <div className="sermon__download">
                      <span className="text-white">Download</span>
                      <a href="">
                        <i className="ri-video-line" />
                      </a>
                      <a href="">
                        <i className="ri-headphone-line" />
                      </a>
                      <a href="">
                        <i className="ri-file-pdf-line" />
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="card sermon">
                  <div className="card__header">
                    <img
                      src={Sermon5}
                      alt=""
                      className="card__image sermon__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="sermon__metas">
                      <div className="sermon__meta--date meta">
                        <i className="ri-calendar-event-line" />
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
                        <h3>Are you truly born again?</h3>
                      </div>
                      <div className="excerpt">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Totam laborum, aperiam iste sit tempore
                          consequuntur voluptates quaerat animi molestias
                          doloribus nobis numquam amet inventore nihil autem
                          praesentium libero laudantium...
                        </p>
                      </div>
                    </div>
                    <div className="sermon__link">
                      <a href="sermons-single.html" className="button">
                        Read more
                      </a>
                    </div>
                    <div className="sermon__download">
                      <span className="text-white">Download</span>
                      <a href="">
                        <i className="ri-video-line" />
                      </a>
                      <a href="">
                        <i className="ri-headphone-line" />
                      </a>
                      <a href="">
                        <i className="ri-file-pdf-line" />
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="card sermon">
                  <div className="card__header">
                    <img
                      src={Sermon4}
                      alt=""
                      className="card__image sermon__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="sermon__metas">
                      <div className="sermon__meta--date meta">
                        <i className="ri-calendar-event-line" />
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
                        <h3>Understanding God's Grace and Justice</h3>
                      </div>
                      <div className="excerpt">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Totam laborum, aperiam iste sit tempore
                          consequuntur voluptates quaerat animi molestias
                          doloribus nobis numquam amet inventore nihil autem
                          praesentium libero laudantium...
                        </p>
                      </div>
                    </div>
                    <div className="sermon__link">
                      <a href="sermons-single.html" className="button">
                        Read more
                      </a>
                    </div>
                    <div className="sermon__download">
                      <span className="text-white">Download</span>
                      <a href="">
                        <i className="ri-video-line" />
                      </a>
                      <a href="">
                        <i className="ri-headphone-line" />
                      </a>
                      <a href="">
                        <i className="ri-file-pdf-line" />
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="card sermon">
                  <div className="card__header">
                    <img
                      src={Sermon6}
                      alt=""
                      className="card__image sermon__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="sermon__metas">
                      <div className="sermon__meta--date meta">
                        <i className="ri-calendar-event-line" />
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
                        <h3>Understanding the Bible and its prophecies</h3>
                      </div>
                      <div className="excerpt">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Totam laborum, aperiam iste sit tempore
                          consequuntur voluptates quaerat animi molestias
                          doloribus nobis numquam amet inventore nihil autem
                          praesentium libero laudantium...
                        </p>
                      </div>
                    </div>
                    <div className="sermon__link">
                      <a href="sermons-single.html" className="button">
                        Read more
                      </a>
                    </div>
                    <div className="sermon__download">
                      <span className="text-white">Download</span>
                      <a href="">
                        <i className="ri-video-line" />
                      </a>
                      <a href="">
                        <i className="ri-headphone-line" />
                      </a>
                      <a href="">
                        <i className="ri-file-pdf-line" />
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
          {/* .all-sermons__sermons ends */}
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
      {/* .all-sermons ends */}
      {/* ALL SERMONS SECTION ENDS */}
      {/* TIME AND LOCATION STARTS */}
      <TimeLocation />
      {/* TIME AND LOCATION ENDS */}
    </>
  );
};

export default Sermons;
