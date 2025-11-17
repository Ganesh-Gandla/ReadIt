import React from "react";
import "../App.css";
import categoriesData from "../assets/categoriesData";

function CategoriesGrid() {
  return (
    <div className="categories-container">
      <h2 className="categories-title">Book Categories</h2>

      <div className="categories-grid">
        {categoriesData.map((cat) => (
          <div className="category-card" key={cat.id}>
            <img src={cat.image} alt={cat.category} className="category-img" />

            <div className="category-info">
              <h3>{cat.category}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesGrid;
