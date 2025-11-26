import React, { useState } from "react";
import "./services.css"

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Web <br />Developer</h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>
 
                <h3 className="services__modal-title">Web Developer</h3>

                <p className="services__modal-description">Skilled Web Developer Delivering Innovative and User-Friendly Solutions</p>

                <ul className="services__modal-services">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Develop responsive user interfaces.</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Implement web page functionality and features.</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Create engaging UX interactions and optimize websites for speed and performance.</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Ensure compatibility and responsiveness across browsers and devices.</p>
                    </li>
                </ul>
            </div>
          </div>

        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Software <br/> Engineer</h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(2)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

                <h3 className="services__modal-title">Software Engineer</h3>

                <p className="services__modal-description">Dedicated Software Engineer Focused on Building Efficient and Scalable Solutions.</p>

                <ul className="services__modal-services">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Develop robust software applications by writing clean, maintainable, and efficient code.</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Optimize application performance and scalability, continous maintainence and testing of application.</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Collaborate in cross-functional teams to deliver quality solutions.</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Support the development lifecycle from concept to deployment.</p>
                    </li>
                </ul>
            </div>
          </div>

        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Driven <br/> Scholar</h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(3)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

                <h3 className="services__modal-title">Driven Scholar</h3>

                <p className="services__modal-description">Student and Learner Committed to Continuous Learning and Focused on Mastering Diverse Tech Stacks.</p>

                <ul className="services__modal-services">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Explore and learn multiple programming languages that captures my interest.</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Stay updated with emerging trends and tools in software development.</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Apply learning and already known concepts on real-world projects and personal challenges.</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Currently focusing on frameworks like React, Node.js, and Spring Boot.</p>
                    </li>
                </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
