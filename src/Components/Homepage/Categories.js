import React from "react";
import "./Categories.css";
import "./Header1.css";
import { Link } from "react-router-dom";
import categories from "../CoolCategories";

function Categories() {
  return (
    <div className="categories">
      {categories.map((e) => {
        return (
          <div className="categories">
            <Link className="anchor" to="/market">
              <div>
                <div className="categories__image">
                  <img src={e.image} alt="image1" />
                </div>
                <div className="categories__title">
                  <span>{e.title}</span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;