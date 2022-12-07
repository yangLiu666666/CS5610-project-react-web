import React, {useContext, useEffect} from 'react';
import {MyContext} from "../../context";
import Button from "react-bootstrap/Button";
import { LinkContainer } from 'react-router-bootstrap';

function Favorites() {
    const {user} = useContext(MyContext);
    useEffect(() => {
        //https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

    })
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
            <h2>Your Favorites</h2>

        </div>
    )
}
export default Favorites;