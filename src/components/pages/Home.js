import React from "react";
import Hero from "../layouts/Hero/Hero";
import NextEvent from "../layouts/NextEvent/NextEvent";
import LastSermon from "../layouts/LastSermon/LastSermon";
import Ministries from "../layouts/Ministries/Ministries";
import Gallery from "../layouts/Gallery/Gallery";
import Testimonials from "../layouts/Testimonials/Testimonials";
import Articles from "../layouts/Articles/Articles";
import Subscription from "../layouts/Subscription/Subscription";
import TimeLocation from "../layouts/TimeLocation/TimeLocation";
import "../../assets/dist/css/main.css";


const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
