import React, { useEffect, useState } from "react";
import MyJumbotron from "../../components/Jumbotron";
import MealsContainer from "../../components/MealsContainer";
import {Button, Form, InputGroup} from "react-bootstrap";

function Home() {
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then((res) => res.json())
            .then((data) => {setSearchResult(data.meals)})
            .catch((error) => console.log(error));

    },[])

    function handleSearch() {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
            .then((res) => res.json())
            .then((data) => {setSearchResult(data.meals)});
    }

    return (
        <div>
            {/*<MyJumbotron />*/}
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
                        <Button variant="danger" id="meal-search-button" onClick={handleSearch} >
                            Button
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <MealsContainer meals={searchResult}/>
        </div>
    )
}
export default Home;