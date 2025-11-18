import React from "react";
import "../App.css";
import categoriesData from "../assets/categoriesData";
import { Link } from "react-router-dom";

function CategoriesGrid() {
  return (
    <div className="categories-container">
      <h2 className="categories-title">Book Categories</h2>

      <div className="categories-grid">
        {categoriesData.map((cat) => (
          <Link to={`/books/${cat.category}`}><div className="category-card" key={cat.id}>
            <img src={cat.image} alt={cat.category} className="category-img" />

            <div className="category-info">
              <h3>{cat.category}</h3>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesGrid;
