import "./App.css";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import i1 from "./images/i1.jpg";
import i2 from "./images/i2.jpg";
import i3 from "./images/i3.jpg";
import { IoReorderThreeOutline } from "react-icons/io5";
import sideimg from "./images/sideimg.jpg";
import { MdAddCall } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LuTreePine } from "react-icons/lu";
import { BiBarChartSquare } from "react-icons/bi";
import { SlSettings } from "react-icons/sl";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const points = [
    "Aenean quam ornare curabitur blandit consectetur.",
    "Nullam quis risus eget urna mollis ornare aenean leo.",
    "Etiam porta euismod malesuada mollis nisl ornare sem.",
    "Vivamus sagittis lacus augue rutrum maecenas.",
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">Sandbox</div>
        <div className="navbar-links">
          <a href="#demos">Demos</a>
          <a href="#pages">Pages</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#blocks">Blocks</a>
          <a href="#documentation">Documentation</a>
        </div>
        <div className="navbar-icons">
          <a href="#twitter" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#facebook" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#dribbble" aria-label="Dribbble">
            <FaEnvelope />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        <div className="navbar_icon" onClick={toggleSidebar}>
          <a href="#outline">
            <IoReorderThreeOutline />
          </a>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="navbar-logo1">
          <h2>Sandbox</h2>
          <div className="sidebar-close" onClick={toggleSidebar}>
            &times;
          </div>
        </div>
        <a href="#demos" onClick={toggleSidebar}>
          Demos
        </a>
        <a href="#pages" onClick={toggleSidebar}>
          Pages
        </a>
        <a href="#projects" onClick={toggleSidebar}>
          Projects
        </a>
        <a href="#blog" onClick={toggleSidebar}>
          Blog
        </a>
        <a href="#blocks" onClick={toggleSidebar}>
          Blocks
        </a>
        <a href="#documentation" onClick={toggleSidebar}>
          Documentation
        </a>
        <div className="footer">
          <div className="social-icons">
            <a href="#demo">
              <FaEnvelope />
            </a>
            <a href="#facebook">
              <FaFacebook />
            </a>
            <a href="#insta">
              <FaInstagram />
            </a>
            <a href="#twitter">
              <FaTwitter />
            </a>
          </div>
          <p>info@email.com</p>
          <p>00 (123) 456 78 90</p>
        </div>
      </div>

      <section className="main">
        <div className="main-text">
          <h1>Just sit & relax while we take care of your business needs.</h1>
          <p>
            We make your spending stress-free for you to have the perfect
            control.
          </p>
          <button className="explore-btn">Explore Now</button>
          <button className="contact-btn">Contact Us</button>
        </div>
        <div className="main-img">
          <img src={sideimg} alt="" />
        </div>
      </section>

      <section>
        <div className="talk_container">
          <div className="image-section">
            <img
              src={sideimg}
              alt="People holding speech bubbles"
              className="speech-image"
            />
          </div>
          <div className="text_section">
            <h2>Let's Talk</h2>
            <p>
              Let's make something great together. We are trusted by over 5000+
              clients. Join them by using our services and grow your business.
            </p>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </p>
            <button className="join-button">Join Us</button>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="header-section">
          <div className="img-grid">
            <div className="image-item">
              <img src={i1} alt="Teamwork" />
            </div>
            <div className="image-item">
              <img src={i3} alt="Collaboration" />
            </div>
            <div className="image-item">
              <img src={i2} alt="Brainstorming" />
            </div>
          </div>

          <div className="experience-overlay">
            <h2>
              20+
              <br />
              Year Experience
            </h2>
          </div>
        </div>
        <div className="text-section">
          <h2>We bring solutions to make life easier for our customers.</h2>
          <p>
            Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum
            nulla sed consectetur. Integer posuere erat a ante venenatis dapibus
            posuere velit aliquet. Vestibulum id ligula porta felis euismod
            semper. Vestibulum id ligula.
          </p>
          <div className="points-container">
            {points.map((point, index) => (
              <div key={index} className="point-item">
                <span className="check-icon">
                  <FaRegCheckCircle />
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="service">
          <div className="service-icon">
            <MdAddCall />
          </div>
          <div className="service-text">
            <h4>24/7 Support</h4>
            <p>
              Duis mollis gravida commodo id luctus erat porttitor ligula, eget
              lacinia odio sem aget elit nullam quis risus eget.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <RiSecurePaymentLine />
          </div>
          <div className="service-text">
            <h4>Secure Payments</h4>
            <p>
              Duis mollis gravida commodo id luctus erat porttitor ligula, eget
              lacinia odio sem aget elit nullam quis risus eget.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <LuTreePine />
          </div>
          <div className="service-text">
            <h4>Market Research</h4>
            <p>
              Duis mollis gravida commodo id luctus erat porttitor ligula, eget
              lacinia odio sem aget elit nullam quis risus eget.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <BiBarChartSquare />
          </div>
          <div className="service-text">
            <h4>System Integration</h4>
            <p>
              Duis mollis gravida commodo id luctus erat porttitor ligula, eget
              lacinia odio sem aget elit nullam quis risus eget.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <SlSettings />
          </div>
          <div className="service-text">
            <h4>Daily Updates</h4>
            <p>
              Duis mollis gravida commodo id luctus erat porttitor ligula, eget
              lacinia odio sem aget elit nullam quis risus eget.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <FaEarthAfrica />
          </div>
          <div className="service-text">
            <h4>SEO Services</h4>
            <p>
              Duis mollis gravida commodo id luctus erat porttitor ligula, eget
              lacinia odio sem aget elit nullam quis risus eget.
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-contant">
          <div className="footer-section1">
            <ul>
              <li>
                <span>
                  <FaPhoneAlt /> 1 (888) 602-6756
                </span>
              </li>
              <li>
                <span>
                  <FaEnvelope /> sales@legacy.com{" "}
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Solution</h4>
            <ul>
              <li>
                <a href="/solutions/wordpress-hosting">Managed WordPress</a>
              </li>
              <li>
                <a href="/solutions/agencies">Agencies</a>
              </li>
              <li>
                <a href="/solutions/smb">Small Medium-Sized </a>
              </li>
              <li>
                <a href="/solutions/freelancers">Freelancers</a>
              </li>
              <li>
                <a href="/solutions/high-traffic">High-Traffic Websites</a>
              </li>
              <li>
                <a href="/solutions/woocommerce">WooCommerce</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/stories">Customer Stories</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/legal">Legal</a>
              </li>
              <li>
                <a href="/press-kit">Press Kit</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/ebooks">eBooks</a>
              </li>
              <li>
                <a href="/knowledge-base">Knowledge Base</a>
              </li>
              <li>
                <a href="/reviews">Customer Reviews</a>
              </li>
              <li>
                <a href="/affiliate">Affiliate Program</a>
              </li>
              <li>
                <a href="/partners">Strategic Partners</a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <ul>
              <li>
                <span>
                  <FaFacebook />
                </span>
              </li>
              <li>
                <span>
                  <FaTwitter />
                </span>
              </li>
              <li>
                <span>
                  <FaInstagram />
                </span>
              </li>
              <li>
                <span>
                  <FaLinkedin />
                </span>
              </li>
              <li>
                <span href="#">
                  <FaYoutube />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
