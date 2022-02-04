import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Header.css";
import headerImg from "../../assets/header.jpg";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chasing perfection" />
        <h1 className="app__header-h1">The Key To A Perfect Cocktail</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          The most important rule of mixology, the rule that supersedes
          everything else, is that balance is everything. All flavors are
          completely irrelevant if a drink is out of balance.
          <br /> <br />
          Acidity, Sweetness, Bitterness and Booze.
          <br /> <br />
          The core principle we’re always trying to strive for when we create
          cocktails is balance of these elements.
        </p>
        <button type="button" className="custom__button">
          Explore Perfection
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={headerImg} alt="martini" />
      </div>
    </div>
  );
};

export default Header;
