import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import data from "../../data/data";
import menu from "../../assets/menu.png";
import MenuItem from "../MenuItem/MenuItem";
import "./CocktailMenu.css";

const CocktailMenu = () => {
  return (
    <div className="app__cocktailMenu flex__center section__padding" id="menu">
      <div className="app__cocktailMenu-title">
        <SubHeading title="Perfectly Balanced" />
        <h1 className="headtext__cormorant">Cocktail List</h1>
      </div>

      <div className="app__cocktailMenu-menu">
        <div className="app__cocktailMenu-menu_twist flex__center">
          <p className="app__cocktailMenu-menu_heading">Our Cocktails</p>
          <div className="app__cocktailMenu-menu_items">
            {data.twistCocktails.map((twist, index) => (
              <MenuItem
                key={twist.title + index}
                title={twist.title}
                price={twist.price}
                tags={twist.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__cocktailMenu-menu_img">
          <img src={menu} alt="cocktail shaker" />
        </div>

        <div className="app__cocktailMenu-menu_classics flex__center">
          <p className="app__cocktailMenu-menu_heading">Classic Cocktails</p>
          <div className="app__cocktailMenu-menu_items">
            {data.classicCocktails.map((classic, index) => (
              <MenuItem
                key={classic.title + index}
                title={classic.title}
                price={classic.price}
                tags={classic.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default CocktailMenu;
