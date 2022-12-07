import React, {useContext, useState} from 'react';
import "./index.css";
import {InputGroup, Form, Button} from "react-bootstrap";
import axios from "axios";
import {MyContext} from "../../context";

function MyJumbotron() {
    const [searchInput, setSearchInput] = useState("");
    const {setMeals} = useContext(MyContext);
    function handleSearch() {
        // axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        //     .then(({data}) => setMeals(data.meals));

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
            .then((res) => res.json())
            .then((data) => {setMeals(data.meals)});

    }
    return (
        <div className="jumbotron">
            <h1>Welcome</h1>
            <h2>You can search your favorite meals</h2>
            <div className="button-input">
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search For A Meal"
                    aria-label="Meal Search Input"
                    aria-describedby="meal-search-button"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <Button variant="danger" id="meal-search-button" onClick={handleSearch}>
                    Button
                </Button>
            </InputGroup>
            </div>
        </div>
    )

}
export default MyJumbotron;