import React, {useContext, useEffect, useState} from 'react';
import {MyContext} from "../../context";
import Button from "react-bootstrap/Button";
import { LinkContainer } from 'react-router-bootstrap';
import MealCard from "../../components/MealCard";

function Profile() {
    const {user} = useContext(MyContext);
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        //https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
        if(user.favorites.length) {
            const requests = user.favorites.map((favorite) =>
                fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favorite}`)
                .then((res) => res.json())
            );
            console.log(requests);
            Promise.all(requests).then((res)=> console.log(res));
            Promise.all(requests).then((res)=> setFavorites(res));
        }
    }, [user])

    if (!user.favorites.length) {
        return (
        <div>
            <h3 className="text-secondary">You don't have any favorites yet</h3>
            <LinkContainer to="/">
                <Button >Please add new ones</Button>
            </LinkContainer>
        </div>
        );
    }
    return(
        <div>
            <h2 className="text-secondary">{user.email}'s Favorites Food</h2>
            <div className="meals-container">
                {favorites.map(({meals: meal}) => (
                    <MealCard key={meal[0].idMeal} {...meal[0]}/>
                ))}
            </div>
        </div>
    );
}
export default Profile;