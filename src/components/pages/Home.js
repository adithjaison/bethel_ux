import React from "react";
import Header from "../layouts/Header/Header";
import Hero from "../layouts/Hero/Hero";
import NextEvent from "../layouts/NextEvent/NextEvent";
import LastSermon from "../layouts/LastSermon/LastSermon";
import Ministries from "../layouts/Ministries/Ministries";
import Gallery from "../layouts/Gallery/Gallery";
import Testimonials from "../layouts/Testimonials/Testimonials";
import Articles from "../layouts/Articles/Articles";
import Subscription from "../layouts/Subscription/Subscription";
import TimeLocation from "../layouts/TimeLocation/TimeLocation";
import Footer from "../layouts/Footer/Footer";
import "../../assets/dist/css/main.css";
import PageLoader from "../layouts/PageLoader/PageLoader";
// import "../../assets/js/main.js";
// import "../../assets/js/plugins/owl.carousel.js";
// import "../../assets/js/plugins/jquery.card.js";
// import "../../assets/js/plugins/aos.js";
// import "../../assets/js/plugins/lightbox.min.js";


const Home = () => {
  return (
    <>
      <PageLoader />
      {/* =================== SITE HEADER BEGINS ============================= */}
      <Header />
      {/* =================== SITE HEADER ENDS ============================= */}
      {/* =================== MAIN SECTION BEGINS ============================= */}
      <main>
        {/* HERO SECTION STARTS */}
        <Hero />
        {/* HERO SECTION ENDS */}
        {/* NEXT EVENT STARTS */}
        <NextEvent />
        {/* NEXT EVENT ENDS */}
        {/* LAST SERMON SECTION STARTS */}
        <LastSermon />
        {/* LAST SERMON SECTION ENDS */}
        {/* OUR MINISTRIES SECTION STARTS */}
        <Ministries />
        {/* OUR MINISTRIES SECTION ENDS */}
        {/* OUR GALLERY STARTS */}
        <Gallery />
        {/* OUR GALLERY ENDS */}
        {/* OUR TESTIMONIALS SECTION STARTS */}
        <Testimonials />
        {/* OUR TESTIMONIALS SECTION ENDS */}
        {/* RECENT ARTICLES STARTS */}
        <Articles />
        {/* RECENT ARTICLES ENDS */}
        {/* SUBSCRIPTION SECTION STARTS */}
        <Subscription />
        {/* SUBSCRIPTION SECTION ENDS */}
        {/* TIME AND LOCATION STARTS */}
        <TimeLocation />
        {/* TIME AND LOCATION ENDS */}
      </main>
      {/* =================== MAIN SECTION ENDS ============================= */}
      {/* SCROLL BACK TO TOP BEGINS */}
      <div className="scroll-to-top">
        <i className="ri-arrow-up-line" />
      </div>
      {/* SCROLL BACK TO TOP ENDS */}
      {/* =================== SITE FOOTER BEGINS ============================= */}
      <Footer />
      {/* =================== SITE FOOTER ENDS ============================= */}
      {/* JQUERY */}
      {/* loading in JQuery locally if CDN failed */}
      {/* Owl Carousel script */}
      {/* JQuery Credit Card script */}
      {/* Animate On Scroll script */}
      {/* Lightbox script */}
      {/* Main (custom) script */}
    </>
  );
};

export default Home;
