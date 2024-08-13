import React, { useState } from 'react';
import './Recipe.css';

const recipes = [
  {
    name: 'Gulab Jamun',
    image: '/jamun.jpg',
    ingredients: `
      - 1 cup Milk Powder
      - 1/4 cup All-Purpose Flour (Maida)
      - 1/8 teaspoon Baking Soda
      - 2 tablespoons Ghee (Clarified Butter)
      - 1/4 cup Milk (more if needed to make the dough)
      - Oil or Ghee (for deep frying)
    `,
    procedure: `
      1. Heat the ghee in a pan.
      2. Mix the milk powder with flour and baking soda.
      3. Form into balls and fry until golden brown.
      4. Soak in sugar syrup.
    `,
  },
  { name: 'Rasgulla', image: '/rasgulla.avif' },
  { name: 'Mysore Pak', image: '/pak.jpg' },
  { name: 'Gajar Ka Halwa', image: '/gajar.jpg' },
  { name: 'Brownie', image: '/brown.jpeg' },
  { name: 'Kaju Katli', image: '/kaju katli.jpg' },
];

const Recipe = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    console.log("Recipe clicked:", recipe.name); 
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="recipe-carousel">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="recipe-box"
          onClick={() => handleRecipeClick(recipe)}
        >
          <img src={recipe.image} alt={recipe.name} className="recipe-image" />
          <p className="recipe-name">{recipe.name}</p>
        </div>
      ))}

      {selectedRecipe && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          zIndex: 1000,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
        }}>
          <button onClick={closeModal} style={{ float: 'right', fontSize: '20px' }}>×</button>
          <h2>{selectedRecipe.name}</h2>
          <h3>Ingredients:</h3>
          <p>{selectedRecipe.ingredients}</p>
          <h3>Procedure:</h3>
          <p>{selectedRecipe.procedure}</p>
        </div>
      )}
      {selectedRecipe && <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
        }} onClick={closeModal}></div>}
    </div>
  );
};

export default Recipe;
