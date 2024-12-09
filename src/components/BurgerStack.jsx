import { availableIngredients } from "../App.jsx";

const BurgerStack = ({stack, handleRemovingIngredient}) => {
    return (
      <>
      {stack.map((ingredient, removedIngredientIndex) => (
       <ul key={ingredient.name} style={{ background: ingredient.color }}>
       <div className="ingredient">
         <li key={ingredient.name}>
           {ingredient.name}
         </li>
         <button onClick={() => handleRemovingIngredient(removedIngredientIndex)}>-</button>
       </div>
     </ul>
     ))}
      </>
    )
  };
  
  export default BurgerStack;
  