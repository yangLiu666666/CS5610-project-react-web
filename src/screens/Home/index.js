import React, {useEffect, useState} from "react";
import MyJumbotron from "../../components/Jumbotron";
import axios from "axios";
import MealsContainer from "../../components/MealsContainer";

function Home() {
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(({ data }) => setMeals(data.meals))
            .catch((error)=>console.log(error));

    },[])
    return (
        <div>
            <MyJumbotron />
            <MealsContainer meals={meals}/>
        </div>
    )

}
export default Home;