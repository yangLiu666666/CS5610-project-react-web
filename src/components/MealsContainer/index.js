import React from "react";
import "./index.css";
import MealCard from "../MealCard";

function MealsContainer({meals}) {
    return (
        <div className="meals-container">
            {meals.map((meal) => (
                <MealCard {...meal}/>
            ))}
        </div>
    );

}
export default MealsContainer;
// <div key={meal.idMeal}>{meal.strMeal}</div>