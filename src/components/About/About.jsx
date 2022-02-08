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
            Stepping into Bond Bar feels a little like entering another world.
            Elegant, yet effortless. Set apart from the bustle of Glasgow, yet
            immersed in its culture. Dedicated to fine art, as well as the finer
            things in life. Every guest receives our world-famous levels of
            service. Forget about everything for a second and take in your
            surroundings. As you ascend the historic staircase, let Bond Bar
            work its magic. Your wish is our command.
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
            We are known for our Classic Martini. <br />A cocktail this iconic
            deserves some ceremony. At Bond Bar, our Martini Trolley is set with
            the makings of the perfect martini. Will it be dirty, a twist or
            subtly infused with flavour? but before you savour that first sip,
            take in the surroundings. <br />
            Cheers! <br />
            Decisions, decisions…
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
