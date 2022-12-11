import React, { useEffect, useState } from "react";
import MyJumbotron from "../../components/Jumbotron";
import MealsContainer from "../../components/MealsContainer";

function Home() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then((res) => res.json())
            .then((data) => {setSearchResult(data.meals)})
            .catch((error) => console.log(error));

    },[])
    return (
        <div>
            <MyJumbotron />
            <MealsContainer meals={searchResult}/>
        </div>
    )

}
export default Home;