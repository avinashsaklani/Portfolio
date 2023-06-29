import React from "react";
import "./about.css";
import HandWave from "../../assets/handwave.png";
// import { FaAward } from "react-icons/fa";
const About = () => {
  return (
    <div id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="hand-wave" src={HandWave} alt="About" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 1+ Working Years</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 1+ Working Years</small>
            </article>
          </div> */}
          <p>
            I am a highly efficient individual with excellent multitasking
            abilities and a keen attention to detail. My expertise lies in
            coding, utilizing software development tools, and implementing
            intricate solutions. I am driven by the opportunity to work with
            cutting-edge technology and contribute to innovative solutions that
            shape a better future.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get in Touch!
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
