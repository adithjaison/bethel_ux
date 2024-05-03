import React from "react";
import PageLoader from "../PageLoader/PageLoader";
import Header from "../Header/Header";
import ScrollBack from "../ScrollBack/ScrollBack";
import Footer from "../Footer/Footer";

const Layout = ({ Page }) => {
  return (
    <>
      <PageLoader />
      {/* =================== SITE HEADER BEGINS ============================= */}
      <Header />
      {/* =================== SITE HEADER ENDS ============================= */}
      {/* =================== MAIN SECTION BEGINS ============================= */}
      <main><Page/></main>
      {/* =================== MAIN SECTION ENDS ============================= */}
      {/* SCROLL BACK TO TOP BEGINS */}
      <ScrollBack />
      {/* SCROLL BACK TO TOP ENDS */}
      {/* =================== SITE FOOTER BEGINS ============================= */}
      <Footer />
      {/* =================== SITE FOOTER ENDS ============================= */}
    </>
  );
};

export default Layout;
