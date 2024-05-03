import React from "react";
import "./style.css";

// Define image paths and titles
const galleryItems = [
  { src: require("../../../assets/images/gallery-1@1.5x.jpg"), srcSet: require("../../../assets/images/gallery-1@2x.jpg"), alt: "the Holy Bible", title: "Picture of the Holy Bible" },
  { src: require("../../../assets/images/gallery-2@1.5x.jpg"), srcSet: require("../../../assets/images/gallery-2@2x.jpg"), alt: "Jesus on a medal cross", title: "Picture of Jesus on a medal cross" },
  { src: require("../../../assets/images/gallery-3@1.5x.jpg"), srcSet: require("../../../assets/images/gallery-3@2x.jpg"), alt: "Bible study", title: "Bible study" },
  { src: require("../../../assets/images/gallery-4@1.5x.jpg"), srcSet: require("../../../assets/images/gallery-4@2x.jpg"), alt: "Inside of a church", title: "Inside of a church" },
  { src: require("../../../assets/images/gallery-5@1.5x.jpg"), srcSet: require("../../../assets/images/gallery-5@2x.jpg"), alt: "people worshiping in church", title: "Picture of people worshiping in church" },
  { src: require("../../../assets/images/gallery-6@1.5x.jpg"), srcSet: require("../../../assets/images/gallery-6@2x.jpg"), alt: "women laughing", title: "Picture of women laughing" },
  { src: require("../../../assets/images/gallery-7@1.5x.jpg"), srcSet: require("../../../assets/images/gallery-7@2x.jpg"), alt: "worship leader singing", title: "Picture of a worship leader singing" },
  { src: require("../../../assets/images/gallery-8@1.5x.jpg"), srcSet: require("../../../assets/images/gallery-8@2x.jpg"), alt: "smart kid at school", title: "Picture of a smart kid at school" }
];

const Gallery = () => {
  return (
    <section className="our-gallery gallery gallery--equal-grid default-section-spacing text-center">
      <div className="section-heading">
        <span>Our gallery</span>
        <h2>Explore our church</h2>
      </div>
      <div className="row">
        {galleryItems.map((item, index) => (
          <div className="flex-md-6 flex-lg-3 no-padding no-margin" key={index}>
            <a
              href={item.srcSet}
              className="gallery-link"
              data-lightbox="church-picture"
              data-title={item.title}
            >
              <div className="card gallery__card">
                <div className="card__header">
                  <img
                    src={item.src}
                    srcSet={`${item.src} 1.5x, ${item.srcSet} 2x`}
                    alt={item.alt}
                    className="card__image"
                  />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
