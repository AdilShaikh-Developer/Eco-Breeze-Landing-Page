import React from "react";

const Testimonial = ({ testimonial, clientName, clientImage, socialLinks }) => {
  return (
    <div className="testimonial">
      <p>"{testimonial}"</p>
      <div>
        <img src={clientImage} />
        <h5>{clientName}</h5>
        <div className="social-links-container">
          {socialLinks.map((e, index) => (
            <a href={e.link} target="_blank" key={index}>
              {e.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
