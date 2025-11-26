import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Portfolio</h1>
        <ul className="footer__list">
          <li>
              About
          </li>

          <li>
              Skills
          </li>

          <li>
              Projects
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/Ankur-Singh-jpg"
            className="footer__social-link"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ankur-singh-715a79323/"
            className="footer__social-link"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">Made by Emirhan Dere</span>
      </div>
    </footer>
  );
};

export default Footer;
