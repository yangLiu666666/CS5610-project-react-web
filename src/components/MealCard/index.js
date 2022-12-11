import React, {useContext, useEffect, useState} from "react";
import {Card, Button} from "react-bootstrap";
import MealModal from "../MealModal";

function MealCard({strMeal, strMealThumb, strInstructions, idMeal}) {
    const [meal, setMeal] = useState({strMeal:'', strMealThumb:'', strInstructions:'', idMeal:''});
    useEffect(() => {
        if (idMeal) {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then((res) => res.json())
            .then((data) => {
                const meal = data.meals[0];
                    setMeal(meal)});
        }
    },[])
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={strMealThumb ?? meal.strMealThumb}/>
            <Card.Body>
                <Card.Title>{ strMeal ?? meal.strMeal }</Card.Title>
                <MealModal title={strMeal ?? meal.strMeal} description={strInstructions ?? meal.strInstructions} idMeal={idMeal}/>
            </Card.Body>
        </Card>
    )
}
export default MealCard;