import React from "react";
import Banner from "../../layouts/Banner/Banner";
import TimeLocation from "../../layouts/TimeLocation/TimeLocation";
import AllMinistries from "../../layouts/AllMinistries/AllMinistries";
const Ministries = () => {
  return (
    <>
      {/* BANNER SECTION STARTS */}
      <Banner BannerHeader="Ministries" />
      {/* BANNER SECTION ENDS */}
      {/* ALL MINISTRIES SECTION STARTS */}
      <AllMinistries />
      {/* ALL MINISTRIES SECTION ENDS */}
      {/* TIME AND LOCATION STARTS */}
      <TimeLocation />
      {/* TIME AND LOCATION ENDS */}
    </>
  );
};

export default Ministries;
