// src/components/IngredientList.jsx

import React from "react";

const IngredientList = ({ingredients, handleAddingIngredient}) => {
 
  return (
    <div className="ingredients">
      {ingredients.map((ingredient) => (
        <ul key={ingredient.name} style={{ background: ingredient.color }}>
          <div className="ingredient">
            <li key={ingredient.name}>
              {ingredient.name}
            </li>
            <button onClick={() => handleAddingIngredient (ingredient)}>+</button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default IngredientList;
