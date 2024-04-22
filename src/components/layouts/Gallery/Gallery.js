import React from "react";
import Gallery1 from "../../../assets/images/gallery-1@1.5x.jpg"
import Gallery12 from "../../../assets/images/gallery-1@2x.jpg"
import Gallery2 from "../../../assets/images/gallery-2@2x.jpg"
import Gallery21 from "../../../assets/images/gallery-2@1.5x.jpg"
import Gallery31 from "../../../assets/images/gallery-3@1.5x.jpg"
import Gallery32 from "../../../assets/images/gallery-3@2x.jpg"
import Gallery41 from "../../../assets/images/gallery-4@1.5x.jpg"
import Gallery42 from "../../../assets/images/gallery-4@2x.jpg"
import Gallery51 from "../../../assets/images/gallery-5@1.5x.jpg"
import Gallery52 from "../../../assets/images/gallery-5@2x.jpg"
import Gallery61 from "../../../assets/images/gallery-6@1.5x.jpg"
import Gallery62 from "../../../assets/images/gallery-6@2x.jpg"
import Gallery71 from "../../../assets/images/gallery-7@1.5x.jpg"
import Gallery72 from "../../../assets/images/gallery-7@2x.jpg"
import Gallery81 from "../../../assets/images/gallery-8@1.5x.jpg"
import Gallery82 from "../../../assets/images/gallery-8@2x.jpg"
import "./style.css"

const Gallery = () => {
  return (
    <section className="our-gallery gallery gallery--equal-grid default-section-spacing text-center">
      <div className="section-heading">
        <span>Our gallery</span>
        <h2>Explore our church</h2>
      </div>
      {/* .section-heading ends */}
      <div className="row">
        <div className="flex-md-6 flex-lg-3 no-padding no-margin">
          <a
            href={Gallery12}
            className="gallery-link"
            data-lightbox="church-picture"
            data-title="Picture of the Holy Bible"
          >
            <div className="card gallery__card">
              <div className="card__header">
                <img
                  src={Gallery1}
                  alt="the Holy Bible"
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
            href={Gallery2}
            className="gallery-link"
            data-lightbox="church-picture"
            data-title="Picture of Jesus on a medal cross"
          >
            <div className="card gallery__card">
              <div className="card__header">
                <img
                  src={Gallery21}
                  alt="Jesus on a medal cross"
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
            href={Gallery32}
            className="gallery-link"
            data-lightbox="church-picture"
            data-title="Bible study"
          >
            <div className="card gallery__card">
              <div className="card__header">
                <img
                  src={Gallery31}
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
            href={Gallery42}
            className="gallery-link"
            data-lightbox="church-picture"
            data-title="Inside of a church"
          >
            <div className="card gallery__card">
              <div className="card__header">
                <img
                  src={Gallery41}
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
            href={Gallery52}
            className="gallery-link"
            data-lightbox="church-picture"
            data-title="Picture of people worshiping in church"
          >
            <div className="card gallery__card">
              <div className="card__header">
                <img
                  src={Gallery51}
                  alt="people worshiping in church"
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
            href={Gallery62}
            className="gallery-link"
            data-lightbox="church-picture"
            data-title="Picture of women laughing"
          >
            <div className="card gallery__card">
              <div className="card__header">
                <img
                  src={Gallery61}
                  alt="women laughing"
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
            href={Gallery72}
            className="gallery-link"
            data-lightbox="church-picture"
            data-title="Picture of a worship leader singing"
          >
            <div className="card gallery__card">
              <div className="card__header">
                <img
                  src={Gallery71}
                  alt="worship leader singing"
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
            href={Gallery82}
            className="gallery-link"
            data-lightbox="church-picture"
            data-title="Picture of a smart kid at school"
          >
            <div className="card gallery__card">
              <div className="card__header">
                <img
                  src={Gallery81}
                  alt="smart kid at school"
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
  );
};

export default Gallery;
