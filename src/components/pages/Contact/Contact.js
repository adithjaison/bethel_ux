import React from "react";
import Banner from "../../layouts/Banner/Banner";
import TimeLocation from "../../layouts/TimeLocation/TimeLocation";
import ContactForm from "../../layouts/ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      {/* BANNER SECTION STARTS */}
      <Banner BannerHeader="Contact Us" />
      {/* BANNER SECTION ENDS */}
      {/* TIME AND LOCATION STARTS */}
      <TimeLocation />
      {/* TIME AND LOCATION ENDS */}
      {/* CONTACT FORM STARTS */}
      <ContactForm />
      {/* CONTACT FORM ENDS */}
    </>
  );
};

export default Contact;
