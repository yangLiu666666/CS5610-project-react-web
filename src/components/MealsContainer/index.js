import React from "react";
import "./index.css";

function MealsContainer({meals}) {
    return (
        <div>
            {meals.map((meal) => (
                <div>{meal.strMeal}</div>
            ))}
        </div>
    );

}
export default MealsContainer;