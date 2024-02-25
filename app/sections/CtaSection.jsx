import React from "react";

const CtaSection = () => {
  return (
    <div className="container">
    <div className=" newsletter-subscription">
      <div className="mask">
        <div className="vertical-wrapper _10px-gap">
          <div
            data-w-id="51cb04e6-97bd-07ab-b893-d7e804168df1"
            style={{
              opacity: 0,
              WebkitTransform:
                "translate3d(-50px, null, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(-50px, null, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(-50px, null, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(-50px, null, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="newsletter-title"
          >
            JOIN OUR NEWSLETTER
          </div>
          <h2 className="heading white-on-mobile-device">
            Get Discount up to 50% off Today!
          </h2>
        </div>
      </div>
      <div className="wrapper width-436px w-form">
        <form
          method="get"
          name="email-form"
          data-name="Email Form"
          style={{
            opacity: 0,
            WebkitTransform:
              "translate3d(null, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(null, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(null, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(null, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
          data-w-id="51cb04e6-97bd-07ab-b893-d7e804168df6"
          id="email-form"
          data-wf-page-id="65c8dc0e1b098f0740d51ce0"
          data-wf-element-id="51cb04e6-97bd-07ab-b893-d7e804168df6"
        >
          <input
            className="newsletter-field w-input"
            maxLength={256}
            name="email"
            data-name="Email"
            placeholder="Enter your email here"
            type="email"
            id="email"
          />
          <input
            type="submit"
            data-wait="Please wait..."
            className="subscribe-button w-button"
            defaultValue="SUBSCRIBE"
          />
        </form>
        <div className="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CtaSection;
