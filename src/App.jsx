import React from "react";
import { CiLinkedin, CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

import Product from "./components/Product.jsx";
import Testimonial from "./components/Testimonial.jsx";

import heroSectionVisual from "./assets/hero-section-visual.jpg";
import aboutUsVisual from "./assets/about-us-visual.jpg";
import EcoCool3000 from "./assets/EcoCool 3000.jpg";
import benefitsSectionVisual from "./assets/benefits-section-visual.jpg";
import johnD from "./assets/john-d.jpg";
import sarahK from "./assets/sarah-k.jpg";
import mikeP from "./assets/mike-p.jpg";

import "./stylesheets/app.scss";
import { IoIosSend } from "react-icons/io";

const App = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>EcoBreeze</h1>
      </header>
      <main>
        <section className="hero-section">
          <div>
            <h2>Revolutionize Your Cooling with EcoBreeze</h2>
            <p>
              We design and manufacture air conditioning units that use natural
              refrigerants, energy-efficient components, and smart technology to
              reduce carbon footprints. Our products are built to last, ensuring
              long-term benefits for both our customers and the environment.
            </p>
            <div className="call-to-action">
              <button>Contact Us</button>
              <span>Over 500 inquiries from potential customers.</span>
            </div>
          </div>
          <img src={heroSectionVisual} className="visual-image" />
        </section>
        <section className="about-us-section">
          <img src={aboutUsVisual} className="visual-image" />
          <div>
            <p>
              EcoBreeze offers innovative, eco-friendly air conditioning
              solutions that reduce energy consumption and minimize
              environmental impact. Our products utilize the latest in green
              technology to provide efficient cooling while maintaining
              sustainability.
            </p>
            <p>
              Our mission is to revolutionize the air conditioning industry by
              providing sustainable and eco-friendly solutions that contribute
              to a healthier planet. We aim to create comfortable living and
              working environments while reducing the environmental impact of
              air conditioning.
            </p>
          </div>
        </section>
        <section className="product-section">
          <Product
            img={EcoCool3000}
            title="EcoCool 3000"
            subtitle="A compact and energy-efficient air conditioning unit perfect for small spaces. It uses natural refrigerants and has a sleek design that fits seamlessly into any room."
          />
          <Product
            img={EcoCool3000}
            title="EcoCool 5000"
            subtitle="A powerful yet eco-friendly air conditioner for larger spaces. It features smart technology that adapts to usage patterns to optimize energy consumption."
          />
          <Product
            img={EcoCool3000}
            title="EcoCool Pro"
            subtitle="Our premium model with advanced features, including air purification, humidity control, and remote monitoring via a mobile app."
          />
        </section>
        <section className="benefits-section">
          <div>
            <h3>
              Benefits of Using EcoBreeze's Eco-Friendly Air Conditioning
              Solutions:
            </h3>
            <ol>
              <li>
                <h4>Energy Efficiency:</h4> Our units consume less energy,
                reducing your electricity bills.
              </li>
              <li>
                <h4>Environmental Impact:</h4> Utilizing natural refrigerants
                and reducing energy consumption, we help decrease greenhouse gas
                emissions.
              </li>
              <li>
                <h4>Health Benefits:</h4> Improved air quality and humidity
                control contribute to healthier indoor environments.
              </li>
              <li>
                <h4>Cost Savings:</h4> Long-term savings through reduced energy
                costs and durable products that require less maintenance.
              </li>
              <li>
                <h4>Smart Technology:</h4> Features like remote monitoring and
                adaptive energy use optimize performance and convenience.
              </li>
              <li>
                <h4>Quiet Operation:</h4> Our units are designed to operate
                quietly, ensuring a peaceful environment.
              </li>
            </ol>
          </div>
          <img src={benefitsSectionVisual} className="visual-image" />
        </section>
        <section className="testimonials-section">
          <Testimonial
            testimonial="EcoBreeze has transformed our office environment. The air is fresher, and our energy bills have significantly decreased."
            clientImage={johnD}
            clientName="John D"
            socialLinks={[
              { platform: <CiLinkedin />, link: "#" },
              { platform: <CiTwitter />, link: "#" },
            ]}
          />
          <Testimonial
            testimonial="I love my EcoCool 3000. It's quiet, efficient, and I feel good knowing I'm making an eco-friendly choice."
            clientImage={sarahK}
            clientName="Sarah K"
            socialLinks={[
              { platform: <CiLinkedin />, link: "#" },
              { platform: <CiTwitter />, link: "#" },
              { platform: <CiFacebook />, link: "#" },
              { platform: <CiInstagram />, link: "#" },
            ]}
          />
          <Testimonial
            testimonial="The EcoCool Pro is fantastic. The air quality in my home has never been better, and I can control everything from my phone."
            clientImage={mikeP}
            clientName="Mike P"
            socialLinks={[
              { platform: <CiLinkedin />, link: "#" },
              { platform: <CiFacebook />, link: "#" },
              { platform: <CiInstagram />, link: "#" },
            ]}
          />
        </section>
        <section className="contact-form-section">
          <h5>
            <span>Your input is invaluable to us!</span>
            <span>Please fill out this form to help us serve you better.</span>
          </h5>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">
              Name
              <input type="text" id="name" />
            </label>
            <label htmlFor="email">
              Email
              <input type="email" id="email" />
            </label>
            <label htmlFor="phoneNumber">
              Phone Number
              <input type="number" id="phoneNumber" />
            </label>
            <label htmlFor="message">
              Message
              <textarea id="message"></textarea>
            </label>
            <button>Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <h1>EcoBreeze</h1>
        {/* <table>
          <thead>
            <tr>
              <td>Social Media Links</td>
              <td>Contact Information</td>
              <td>Other Relevant Links</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#">Facebook</a>
              </td>
              <td>
                <a href="#">contact@ecobreeze.com</a>
              </td>
              <td>
                <a href="#">Company Blog</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Twitter</a>
              </td>
              <td>+ 1-800-123-4567</td>
              <td>
                <a href="#">Company Support</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Instagram</a>
              </td>
              <td>123 Green Way, Eco City, EC 45678</td>
              <td>
                <a href="#">Privacy Policy</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">LinkedIn</a>
              </td>
            </tr>
          </tbody>
        </table> */}
        <div>
          <section className="social-media-links">
            <h6>Social Media Links</h6>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </section>
          <section className="contact-information">
            <h6>Contact Information</h6>
            <ul>
              <li>
                <a href="mailto:contact@ecobreeze.com">contact@ecobreeze.com</a>
              </li>
              <li>+ 1-800-123-4567</li>
              <li>123 Green Way, Eco City, EC 45678</li>
            </ul>
          </section>
          <section className="other-relevant-links">
            <h6>Other Relevant Links</h6>
            <ul>
              <li>
                <a href="#">Company Blog</a>
              </li>
              <li>
                <a href="#">Company Support</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </section>
        </div>
        <section className="newsletter-subcription">
          <h6>Subscribe</h6>
          <div>
            <input type="text" placeholder="your email address" />
            <IoIosSend />
          </div>
          <p>Join our newsletter to stay up to date on features and releases</p>
        </section>
      </footer>
    </div>
  );
};

export default App;
