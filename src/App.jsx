// src/App.jsx

import { useState } from 'react';
import './App.css';
import BurgerStack from './components/BurgerStack'
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState ([]);
  const [removeIngredient, setRemoveIngredient] = useState([])

  const handleAddingIngredient = (ingredient) => {
    setStack([...stack, ingredient])
  }

  const handleRemovingIngredient = (removeIngredientIndex) => {
  
    const newArray = stack.filter((ingredient) => stack.indexOf(ingredient) !== removeIngredientIndex)
    console.log(newArray)
    setStack(newArray)
    }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <div className='stacker'>
        <div className='ingredientList'>
        <IngredientList 
        ingredients={availableIngredients}
        handleAddingIngredient={handleAddingIngredient}
        />  
        </div>
        <div className='burger'>
        <BurgerStack 
        stack={stack}
        handleRemovingIngredient={handleRemovingIngredient}
        />
        </div>
      </div>
    </main>
  );
};


export default App;
