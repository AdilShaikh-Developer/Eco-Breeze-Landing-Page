import React from "react";

const Testimonial = ({ testimonial, clientName, clientImage, socialLinks }) => {
  return (
    <div className="testimonial">
      <p>"{testimonial}"</p>
      <div>
        <img src={clientImage} />
        <h5>{clientName}</h5>
        <div className="social-links-container">
          {socialLinks.map((e) => (
            <a href={e.link} target="_blank">
              {e.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
