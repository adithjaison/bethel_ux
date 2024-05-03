import React from "react";
import Banner from "../../layouts/Banner/Banner";
import TimeLocation from "../../layouts/TimeLocation/TimeLocation";
import AllEvents from "../../layouts/AllEvents/AllEvents";

const Events = () => {
  return (
    <>
      {/* BANNER SECTION STARTS */}
      <Banner BannerHeader="Events" />
      {/* BANNER SECTION ENDS */}
      {/* ALL EVENTS SECTION STARTS */}
      <AllEvents />
      {/* ALL EVENTS SECTION ENDS */}
      {/* TIME AND LOCATION STARTS */}
      <TimeLocation />
      {/* TIME AND LOCATION ENDS */}
    </>
  );
};

export default Events;
