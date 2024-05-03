import React from "react";
import Banner from "../../layouts/Banner/Banner";
import TimeLocation from "../../layouts/TimeLocation/TimeLocation";
import AllPosts from "../../layouts/AllPosts/AllPosts";

const Blog = () => {
  return (
    <>
      {/* BANNER SECTION STARTS */}
      <Banner BannerHeader="Blog" />
      {/* BANNER SECTION ENDS */}
      {/* ALL POSTS SECTION STARTS */}
      <AllPosts />
      {/* ALL POSTS SECTION ENDS */}
      {/* TIME AND LOCATION STARTS */}
      <TimeLocation />
      {/* TIME AND LOCATION ENDS */}
    </>
  );
};

export default Blog;
