import React from "react";

const Gallery = () => {
  return (
    <div>
      <section className="our-gallery gallery gallery--equal-grid default-section-spacing text-center">
        <div className="section-heading">
          <span>Our gallery</span>
          <h2>Explore our church</h2>
        </div>
        {/* .section-heading ends */}
        <div className="row">
          <div className="flex-md-6 flex-lg-3 no-padding no-margin">
            <a
              href="images/gallery-1@2x.jpg"
              className="gallery-link"
              data-lightbox="church-picture"
              data-title="Picture of the Holy Bible"
            >
              <div className="card gallery__card">
                <div className="card__header">
                  <img
                    src="images/gallery-1@1.5x.jpg"
                    alt="Picture of the Holy Bible"
                    className="card__image"
                  />
                </div>
              </div>
              {/* .card ends */}
            </a>
            {/* .gallery-link */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3 no-padding no-margin">
            <a
              href="images/gallery-2@2x.jpg"
              className="gallery-link"
              data-lightbox="church-picture"
              data-title="Picture of Jesus on a medal cross"
            >
              <div className="card gallery__card">
                <div className="card__header">
                  <img
                    src="images/gallery-2@1.5x.jpg"
                    alt="Picture of Jesus on a medal cross"
                    className="card__image"
                  />
                </div>
              </div>
              {/* .card ends */}
            </a>
            {/* .gallery-link */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3 no-padding no-margin">
            <a
              href="images/gallery-3@2x.jpg"
              className="gallery-link"
              data-lightbox="church-picture"
              data-title="Bible study"
            >
              <div className="card gallery__card">
                <div className="card__header">
                  <img
                    src="images/gallery-3@1.5x.jpg"
                    alt="Bible study"
                    className="card__image"
                  />
                </div>
              </div>
              {/* .card ends */}
            </a>
            {/* .gallery-link */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3 no-padding no-margin">
            <a
              href="images/gallery-4@2x.jpg"
              className="gallery-link"
              data-lightbox="church-picture"
              data-title="Inside of a church"
            >
              <div className="card gallery__card">
                <div className="card__header">
                  <img
                    src="images/gallery-4@1.5x.jpg"
                    alt="Inside of a church"
                    className="card__image"
                  />
                </div>
              </div>
              {/* .card ends */}
            </a>
            {/* .gallery-link */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3 no-padding no-margin">
            <a
              href="images/gallery-5@2x.jpg"
              className="gallery-link"
              data-lightbox="church-picture"
              data-title="Picture of people worshiping in church"
            >
              <div className="card gallery__card">
                <div className="card__header">
                  <img
                    src="images/gallery-5@1.5x.jpg"
                    alt="Picture of people worshiping in church"
                    className="card__image"
                  />
                </div>
              </div>
              {/* .card ends */}
            </a>
            {/* .gallery-link */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3 no-padding no-margin">
            <a
              href="images/gallery-6@2x.jpg"
              className="gallery-link"
              data-lightbox="church-picture"
              data-title="Picture of women laughing"
            >
              <div className="card gallery__card">
                <div className="card__header">
                  <img
                    src="images/gallery-6@1.5x.jpg"
                    alt="Picture of women laughing"
                    className="card__image"
                  />
                </div>
              </div>
              {/* .card ends */}
            </a>
            {/* .gallery-link */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3 no-padding no-margin">
            <a
              href="images/gallery-7@2x.jpg"
              className="gallery-link"
              data-lightbox="church-picture"
              data-title="Picture of a worship leader singing"
            >
              <div className="card gallery__card">
                <div className="card__header">
                  <img
                    src="images/gallery-7@1.5x.jpg"
                    alt="Picture of a worship leader singing"
                    className="card__image"
                  />
                </div>
              </div>
              {/* .card ends */}
            </a>
            {/* .gallery-link */}
          </div>
          {/* .flex-* ends */}
          <div className="flex-md-6 flex-lg-3 no-padding no-margin">
            <a
              href="images/gallery-8@2x.jpg"
              className="gallery-link"
              data-lightbox="church-picture"
              data-title="Picture of a smart kid at school"
            >
              <div className="card gallery__card">
                <div className="card__header">
                  <img
                    src="images/gallery-8@1.5x.jpg"
                    alt="Picture of a smart kid at school"
                    className="card__image"
                  />
                </div>
              </div>
              {/* .card ends */}
            </a>
            {/* .gallery-link */}
          </div>
          {/* .flex-* ends */}
        </div>
        {/* .row ends */}
      </section>
    </div>
  );
};

export default Gallery;
