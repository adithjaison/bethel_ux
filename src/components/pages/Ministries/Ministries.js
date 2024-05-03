import React from "react";
import Banner from "../../layouts/Banner/Banner";
import TimeLocation from "../../layouts/TimeLocation/TimeLocation";
import Ministry1 from "../../../assets/images/ministry-1@1.5x.jpg";
import Ministry3 from "../../../assets/images/ministry-3@1.5x.jpg";
import Ministry2 from "../../../assets/images/ministry-2@1.5x.jpg";
import Ministry4 from "../../../assets/images/ministry-4@1.5x.jpg";
import Ministry5 from "../../../assets/images/ministry-5@1.5x.jpg";
import Ministry6 from "../../../assets/images/ministry-6@1.5x.jpg";
const Ministries = () => {
  return (
    <>
      {/* BANNER SECTION STARTS */}
      <Banner BannerHeader="Ministries" />
      {/* BANNER SECTION ENDS */}
      {/* ALL MINISTRIES SECTION STARTS */}
      <div className="all-ministries default-section-spacing">
        <div className="container">
          <div className="section-heading text-center no-margin">
            <span>Ministries</span>
            <h2>Our ministries</h2>
          </div>
          {/* .section-heading ends */}
          <div className="search search-header default-section-spacing">
            <div className="row">
              <div className="flex-md-3 flex-lg-4">
                <div className="search__result">
                  <div className="text leading uppercase bold">Results</div>
                  <p>Showing 6 out of 24 ministries</p>
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
                        placeholder="Search for ministries..."
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
          <div className="all-ministries__ministries">
            <div className="row">
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card ministry">
                  <div className="card__header">
                    <img
                      src={Ministry1}
                      alt="A man holding and reading the Holy Bible"
                      className="card__image ministry__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="ministry__title">
                      <h3>Men's ministry</h3>
                    </div>
                    <div className="ministry__meta">
                      <i className="ri-group-line" /> <span>14 Brothers</span>
                    </div>
                    <div className="ministry__content">
                      <div className="excerpt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sint culpa totam laborum.
                        </p>
                      </div>
                      <div className="ministry__link">
                        <a href="ministries-single.html" className="button">
                          Learn more
                        </a>
                      </div>
                    </div>
                    {/* .ministry__content ends */}
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card ministry">
                  <div className="card__header">
                    <img
                      src={Ministry3}
                      alt="A little boy laughing while reading the Holy Bible"
                      className="card__image ministry__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="ministry__title">
                      <h3>Children's ministry</h3>
                    </div>
                    <div className="ministry__meta">
                      <i className="ri-group-line" /> <span>26 Children</span>
                    </div>
                    <div className="ministry__content">
                      <div className="excerpt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sint culpa totam laborum.
                        </p>
                      </div>
                      <div className="ministry__link">
                        <a href="ministries-single.html" className="button">
                          Learn more
                        </a>
                      </div>
                    </div>
                    {/* .ministry__content ends */}
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card ministry">
                  <div className="card__header">
                    <img
                      src={Ministry2}
                      alt="Young women praying"
                      className="card__image ministry__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="ministry__title">
                      <h3>Women's ministry</h3>
                    </div>
                    <div className="ministry__meta">
                      <i className="ri-group-line" /> <span>12 Sisters</span>
                    </div>
                    <div className="ministry__content">
                      <div className="excerpt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sint culpa totam laborum.
                        </p>
                      </div>
                      <div className="ministry__link">
                        <a href="ministries-single.html" className="button">
                          Learn more
                        </a>
                      </div>
                    </div>
                    {/* .ministry__content ends */}
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="card ministry">
                  <div className="card__header">
                    <img
                      src={Ministry4}
                      alt="Church event"
                      className="card__image ministry__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="ministry__title">
                      <h3>Homeless outreach ministry</h3>
                    </div>
                    <div className="ministry__meta">
                      <i className="ri-group-line" /> <span>14 Members</span>
                    </div>
                    <div className="ministry__content">
                      <div className="excerpt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sint culpa totam laborum.
                        </p>
                      </div>
                      <div className="ministry__link">
                        <a href="ministries-single.html" className="button">
                          Learn more
                        </a>
                      </div>
                    </div>
                    {/* .ministry__content ends */}
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="card ministry">
                  <div className="card__header">
                    <img
                      src={Ministry5}
                      alt="Women laughing"
                      className="card__image ministry__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="ministry__title">
                      <h3>Women's choir</h3>
                    </div>
                    <div className="ministry__meta">
                      <i className="ri-group-line" /> <span>12 Sisters</span>
                    </div>
                    <div className="ministry__content">
                      <div className="excerpt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sint culpa totam laborum.
                        </p>
                      </div>
                      <div className="ministry__link">
                        <a href="ministries-single.html" className="button">
                          Learn more
                        </a>
                      </div>
                    </div>
                    {/* .ministry__content ends */}
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="card ministry">
                  <div className="card__header">
                    <img
                      src={Ministry6}
                      alt="Man singing"
                      className="card__image ministry__image"
                    />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="ministry__title">
                      <h3>Men's choir</h3>
                    </div>
                    <div className="ministry__meta">
                      <i className="ri-group-line" /> <span>10 Brothers</span>
                    </div>
                    <div className="ministry__content">
                      <div className="excerpt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sint culpa totam laborum.
                        </p>
                      </div>
                      <div className="ministry__link">
                        <a href="ministries-single.html" className="button">
                          Learn more
                        </a>
                      </div>
                    </div>
                    {/* .ministry__content ends */}
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
      {/* ALL MINISTRIES SECTION ENDS */}
      {/* TIME AND LOCATION STARTS */}
      <TimeLocation />
      {/* TIME AND LOCATION ENDS */}
    </>
  );
};

export default Ministries;
