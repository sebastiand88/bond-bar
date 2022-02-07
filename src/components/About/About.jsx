import React from "react";
import "./About.css";
import B from "../../assets/Blogo.png";
import martini from "../../assets/martini.png";
import { FaCocktail } from "react-icons/fa";

const About = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={B} alt="letter b" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <FaCocktail size={32} style={{ color: "var(--color-golden)" }} />
          <p className="p__opensans">
            Aenean non iaculis elit. Etiam ultrices commodo orci nec fermentum.
            Aliquam facilisis malesuada sapien, vel consectetur massa auctor
            vel. Duis turpis sem, interdum eget gravida sed, fringilla a sem.
            Sed ut justo non erat vehicula euismod. Aenean leo nulla, cursus
            quis urna at, gravida eleifend nisl. Aenean mattis a justo sed
            lacinia.
          </p>
          <button type="button" className="custom__button">
            Learn More
          </button>
        </div>

        <div className="app__aboutus-content_martini flex__center">
          <img src={martini} alt="martini cocktail" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <FaCocktail size={32} style={{ color: "var(--color-golden)" }} />
          <p className="p__opensans">
            Aenean non iaculis elit. Etiam ultrices commodo orci nec fermentum.
            Aliquam facilisis malesuada sapien, vel consectetur massa auctor
            vel. Duis turpis sem, interdum eget gravida sed, fringilla a sem.
            Sed ut justo non erat vehicula euismod. Aenean leo nulla, cursus
            quis urna at, gravida eleifend nisl. Aenean mattis a justo sed
            lacinia.
          </p>
          <button type="button" className="custom__button">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
