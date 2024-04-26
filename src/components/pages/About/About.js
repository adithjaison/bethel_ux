import React from "react";
import PageLoader from "../../layouts/PageLoader/PageLoader";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import Banner from "../../layouts/Banner/Banner";
import Pastor from "../../../assets/images/pastor@1.5x.jpg";
import Staff1 from "../../../assets/images/staff-1@1.5x.jpg";
import Staff2 from "../../../assets/images/staff-2@1.5x.jpg";
import Staff3 from "../../../assets/images/staff-3@1.5x.jpg";
import Staff4 from "../../../assets/images/staff-4@1.5x.jpg";
import Staff5 from "../../../assets/images/staff-5@1.5x.jpg";
import Staff6 from "../../../assets/images/staff-6@1.5x.jpg";
import "./style.css";

const About = () => {
  return (
    <>
      <PageLoader />
      {/* =================== SITE HEADER BEGINS ============================= */}
      <Header />
      {/* .header ends */}
      {/* =================== SITE HEADER ENDS ============================= */}
      {/* =================== MAIN SECTION BEGINS ============================= */}
      <main>
        {/* BANNER SECTION STARTS */}
        <Banner BannerHeader="About Us" />
        {/* .banner ends */}
        {/* BANNER SECTION ENDS */}
        {/* OUR PASTOR SECTION STARTS */}
        <section className="our-pastor default-section-spacing">
          <div className="container">
            <div className="row align-items-center">
              <div className="flex-md-6 flex-lg-7">
                <div className="our-pastor__content">
                  <div className="section-heading">
                    <span>Our pastor</span>
                    <h2>Meet our pastor</h2>
                  </div>
                  {/* .section-heading ends */}
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Totam laborum, aperiam iste sit tempore consequuntur
                    voluptates quaerat animi molestias doloribus nobis numquam
                    amet inventore nihil autem praesentium libero laudantium.
                    Possimus, maiores, eius ipsum beatae numquam nemo cum
                    officiis.
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Totam laborum, aperiam iste sit tempore consequuntur
                    voluptates quaerat animi molestias doloribus nobis numquam
                    amet inventore nihil autem praesentium libero laudantium.
                    Possimus, maiores, eius ipsum beatae numquam nemo cum
                    officiis, veniam quidem quibusdam impedit inventore rem.
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Totam laborum, aperiam iste sit tempore consequuntur
                    voluptates quaerat animi molestias doloribus nobis numquam
                    amet inventore nihil autem praesentium libero laudantium.
                    Possimus, maiores, eius ipsum beatae numquam nemo cum
                    officiis.
                  </p>
                </div>
                {/* .our-pastor__content ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-5">
                <div className="card card--picture staff">
                  <div className="card__header">
                    <img src={Pastor} alt="A man" className="card__image" />
                  </div>
                  {/* .card__header ends */}
                  <div className="card__footer">
                    <div className="staff__name">
                      <h3>Erik B. Hogan</h3>
                    </div>
                  </div>
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
            </div>
            {/* .row ends */}
          </div>
          {/* .container ends */}
        </section>
        {/* .our-pastor ends */}
        {/* OUR PASTOR SECTION ENDS */}
        {/* OUR STAFFS STARTS */}
        <section className="our-staffs default-section-spacing text-center background-lighter-gray">
          <div className="container">
            <div className="section-heading text-center">
              <span>Our staffs</span>
              <h2>Meet some of our friendly staffs</h2>
            </div>
            {/* .section-heading ends */}
            <div className="row">
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card card--picture staff">
                  <div className="card__header">
                    <img src={Staff1} alt="A man" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="staff__name">
                      <h3>Walter L. Brown</h3>
                    </div>
                    <div className="staff__title">Assistant pastor</div>
                    <div className="staff__link">
                      <a href="staffs-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card card--picture staff">
                  <div className="card__header">
                    <img src={Staff2} alt="A man" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="staff__name">
                      <h3>Maryanne G. Crum</h3>
                    </div>
                    <div className="staff__title">Worship leader</div>
                    <div className="staff__link">
                      <a href="staffs-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4 mar-b-sm">
                <div className="card card--picture staff">
                  <div className="card__header">
                    <img src={Staff3} alt="A man" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="staff__name">
                      <h3>Clarence C. Laughlin</h3>
                    </div>
                    <div className="staff__title">Usher</div>
                    <div className="staff__link">
                      <a href="staffs-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="card card--picture staff">
                  <div className="card__header">
                    <img src={Staff4} alt="A man" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="staff__name">
                      <h3>Katrina A. Compton</h3>
                    </div>
                    <div className="staff__title">Assistant pastor</div>
                    <div className="staff__link">
                      <a href="staffs-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="card card--picture staff">
                  <div className="card__header">
                    <img src={Staff5} alt="A man" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="staff__name">
                      <h3>Matthew T. Chronister</h3>
                    </div>
                    <div className="staff__title">Worship leader</div>
                    <div className="staff__link">
                      <a href="staffs-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4 no-margin">
                {/* the "no-margin" class here remove the margin-top on medium devices such as tablet portrait */}
                <div className="card card--picture staff">
                  <div className="card__header">
                    <img src={Staff6} alt="A man" className="card__image" />
                  </div>
                  <div className="card__footer">
                    <div className="staff__name">
                      <h3>Sandy T. Cox</h3>
                    </div>
                    <div className="staff__title">Usher</div>
                    <div className="staff__link">
                      <a href="staffs-single.html" className="button">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* .card__footer ends */}
                </div>
                {/* .card ends */}
              </div>
              {/* .flex-* ends */}
            </div>
            {/* .row ends */}
          </div>
        </section>
        {/* .our-staffs ends */}
        {/* OUR STAFFS ENDS */}
        {/* OUR MISSION AND VISION SECTION STARTS */}
        <section className="our-mission-vision default-section-spacing text-white">
          <div className="our-mission-vision__content">
            <div className="container">
              <div className="row">
                <div className="flex-lg-6">
                  <div className="section-heading">
                    <span>Missions</span>
                    <h2>Our missions</h2>
                  </div>
                  {/* .section-heading ends */}
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                  <p className="mar-b-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                </div>
                {/* .flex-* ends */}
                <div className="flex-lg-6">
                  <div className="section-heading text-white">
                    <span>Visions</span>
                    <h2>Our vision</h2>
                  </div>
                  {/* .section-heading ends */}
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate ut delectus qui quos alias dignissimos
                    reprehenderit explicabo repellendus. Ipsam, accusantium
                    tenetur? Iste numquam odio voluptatem exercitationem
                    officiis debitis aliquam quis.
                  </p>
                </div>
                {/* .flex-* ends */}
              </div>
              {/* .row ends */}
            </div>
            {/* .container ends */}
          </div>
          {/* .our-mission-vision__content ends */}
        </section>
        {/* .our-mission-vision ends */}
        {/* OUR MISSION AND VISION SECTION ENDS */}
        {/* OUR BELIEF STARTS */}
        <section className="our-belief default-section-spacing text-center">
          <div className="container">
            <div className="section-heading">
              <span>Our belief</span>
              <h2>Our faith - what we believe</h2>
            </div>
            {/* .section-heading ends */}
            <div className="row">
              <div className="flex-md-6 flex-lg-3 mar-b-sm">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>The Bible</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, accusamus.
                  </p>
                </div>
                {/* .our-belief__box ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-3 mar-b-sm">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>The Holy Trinity</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, accusamus.
                  </p>
                </div>
                {/* .our-belief__box ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-3">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>The Blessed Hope</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, accusamus.
                  </p>
                </div>
                {/* .our-belief__box ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-3">
                <div className="our-belief__box">
                  <div className="heading">
                    <h3>Sanctification</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, accusamus.
                  </p>
                </div>
                {/* .our-belief__box ends */}
              </div>
              {/* .flex-* ends */}
            </div>
            {/* .row ends */}
          </div>
          {/* .container ends */}
        </section>
        {/* .our-belief ends */}
        {/* OUR BELIEF ENDS */}
        {/* OUR STATS STARTS */}
        <section className="our-stats text-center">
          <div className="container">
            <div className="row">
              <div className="flex-md-6 flex-lg-3 mar-b-sm">
                <div className="our-stats__box">
                  <div className="heading">
                    <div>1995</div>
                  </div>
                  <h3>Year built</h3>
                </div>
                {/* .our-stats__box ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-3 mar-b-sm">
                <div className="our-stats__box">
                  <div className="heading">
                    <div>25,000</div>
                  </div>
                  <h3>Members</h3>
                </div>
                {/* .our-stats__box ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-3">
                <div className="our-stats__box">
                  <div className="heading">
                    <div>$584K</div>
                  </div>
                  <h3>Given in scholarship</h3>
                </div>
                {/* .our-stats__box ends */}
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-3">
                <div className="our-stats__box">
                  <div className="heading">
                    <div>56</div>
                  </div>
                  <h3>Ministries</h3>
                </div>
                {/* .our-stats__box ends */}
              </div>
              {/* .flex-* ends */}
            </div>
            {/* .row ends */}
          </div>
          {/* .container ends */}
        </section>
        {/* .our-stats ends */}
        {/* OUR STATS ENDS */}
        {/* TIME AND LOCATION STARTS */}
        <section className="time-location">
          <div className="container">
            <div className="row">
              <div className="flex-lg-6">
                <div className="time-location__content default-section-spacing">
                  <div className="section-heading">
                    <span>Time and location</span>
                    <h2>Come and worship with us</h2>
                  </div>
                  {/* .section-heading ends */}
                  <div className="time-location__time">
                    <div className="info">
                      <div className="day bold">Sunday:</div>
                      <div className="time">
                        <span>9:00 am - 10:30 am (Sunday school)</span>
                        <span>11:00 am - 1:30 pm (Morning service)</span>
                        <span>4:00 pm - 5:30 pm (Evening service)</span>
                      </div>
                    </div>
                    <div className="info">
                      <div className="location bold">Location:</div>
                      <div className="location-info">
                        <span>123 Jay St, Albany, NY 12203</span>
                      </div>
                    </div>
                  </div>
                  {/* .time-location__time ends */}
                </div>
              </div>
              {/* .flex-* ends */}
            </div>
            {/* .row ends */}
          </div>
          {/* .container ends */}
          <div className="time-location__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.500392314035!2d-73.76198333429348!3d42.650750424686215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0a3cdc54f8b3%3A0x369f717b85d43cfc!2sMadison%20Ave%20%26%20Empire%20State%20Plaza!5e0!3m2!1sen!2sus!4v1583133727681!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen=""
            />
          </div>
        </section>
        {/* .time-location ends */}
        {/* TIME AND LOCATION ENDS */}
      </main>
      {/* main ends */}
      {/* =================== MAIN SECTION ENDS ============================= */}
      {/* SCROLL BACK TO TOP BEGINS */}
      <div className="scroll-to-top">
        <i className="ri-arrow-up-line" />
      </div>
      {/* SCROLL BACK TO TOP ENDS */}
      {/* =================== SITE FOOTER BEGINS ============================= */}
      <Footer />
      {/* footer ends */}
      {/* =================== SITE FOOTER ENDS ============================= */}
      {/* JQUERY */}
      {/* loading in JQuery locally if CDN failed */}
      {/* Owl Carousel script */}
      {/* JQuery Credit Card script */}
      {/* Animate On Scroll script */}
      {/* Lightbox script */}
      {/* Main script */}
    </>
  );
};

export default About;
