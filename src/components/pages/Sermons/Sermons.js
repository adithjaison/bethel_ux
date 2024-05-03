import React from "react";
import Banner from "../../layouts/Banner/Banner";
import TimeLocation from "../../layouts/TimeLocation/TimeLocation";
import AllSermons from "../../layouts/AllSermons/AllSermons";

const Sermons = () => {
  return (
    <>
      {/* BANNER SECTION STARTS */}
      <Banner BannerHeader="Sermons" />
      {/* BANNER SECTION ENDS */}
      {/* ALL SERMONS SECTION STARTS */}
      <AllSermons />
      {/* ALL SERMONS SECTION ENDS */}
      {/* TIME AND LOCATION STARTS */}
      <TimeLocation />
      {/* TIME AND LOCATION ENDS */}
    </>
  );
};

export default Sermons;
