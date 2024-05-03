import React from "react";

const ContactForm = () => {
  return (
    <section className="contact default-section-spacing">
      <div className="container">
        <form action="#" className="form contact__form">
          <div className="row">
            <div className="flex-md-6">
              <div className="form__group">
                <label htmlFor="fname" className="form__label">
                  Your first name <span className="color-danger">*</span>
                </label>
                <input
                  type="text"
                  id="fname"
                  className="form__input"
                  name="fname"
                  placeholder="Enter your full name"
                />
              </div>
              {/* .form__group ends */}
            </div>
            {/* .flex-* ends */}
            <div className="flex-md-6 mar-b-sm">
              <div className="form__group">
                <label htmlFor="email-2" className="form__label">
                  Your email address <span className="color-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email-2"
                  className="form__input"
                  name="email"
                  placeholder="Enter your email address"
                />
              </div>
              {/* .form__group ends */}
            </div>
            {/* .flex-* ends */}
            <div className="flex-md-12 mar-b-sm">
              <div className="form__group">
                <label htmlFor="subject" className="form__label">
                  Subject <span className="color-danger">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form__input"
                  name="subject"
                  placeholder="Enter your subject"
                />
              </div>
              {/* .form__group ends */}
            </div>
            {/* .flex-* ends */}
            <div className="flex-md-12 mar-b-sm">
              <div className="form__group">
                <label htmlFor="message-2" className="form__label">
                  Message <span className="color-danger">*</span>
                </label>
                <textarea
                  name="message"
                  id="message-2"
                  className="form__textarea form__input"
                  placeholder="Enter your message..."
                  defaultValue={""}
                />
              </div>
              {/* .form__group ends */}
            </div>
            {/* .flex-* ends */}
            <div className="flex-md-12 mar-b-sm">
              <button className="button" type="submit" name="submit">
                Send message
              </button>
            </div>
            {/* .flex-* ends */}
          </div>
          {/* .row ends */}
        </form>
        {/* .form ends */}
      </div>
      {/* .container ends */}
    </section>
  );
};

export default ContactForm;
