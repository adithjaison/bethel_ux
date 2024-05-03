import React from "react";
import Banner from "../../layouts/Banner/Banner";
import OurPastor from "../../layouts/OurPastor/OurPastor";
import OurStaffs from "../../layouts/OurStaffs/OurStaffs";
import OurMissionAndVision from "../../layouts/OurMissionAndVision/OurMissionAndVision";
import OurBelief from "../../layouts/OurBelief/OurBelief";
import OurStats from "../../layouts/OurStats/OurStats";
import TimeLocation from "../../layouts/TimeLocation/TimeLocation";
import "./style.css";

const About = () => {
  return (
    <>
      {/* BANNER SECTION STARTS */}
      <Banner BannerHeader="About Us" />
      {/* BANNER SECTION ENDS */}
      {/* OUR PASTOR SECTION STARTS */}
      <OurPastor />
      {/* OUR PASTOR SECTION ENDS */}
      {/* OUR STAFFS STARTS */}
      <OurStaffs />
      {/* OUR STAFFS ENDS */}
      {/* OUR MISSION AND VISION SECTION STARTS */}
      <OurMissionAndVision />
      {/* OUR MISSION AND VISION SECTION ENDS */}
      {/* OUR BELIEF STARTS */}
      <OurBelief />
      {/* OUR BELIEF ENDS */}
      {/* OUR STATS STARTS */}
      <OurStats />
      {/* OUR STATS ENDS */}
      {/* TIME AND LOCATION STARTS */}
      <TimeLocation />
      {/* TIME AND LOCATION ENDS */}
    </>
  );
};

export default About;
