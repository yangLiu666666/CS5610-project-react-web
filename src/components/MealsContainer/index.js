import React from "react";
import "./index.css";
import MealCard from "../MealCard";

function MealsContainer({meals}) {
    return (
        <div className="meals-container">
            {meals.map((meal) => (
                <MealCard key={meal.idMeal} {...meal}/>
            ))}
        </div>
    );
}
export default MealsContainer;