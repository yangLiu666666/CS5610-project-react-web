import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {MyContext} from "../../context";
// import axios from "axios";
import httpClient from "../../Axios";

function MealModal({title, description, idMeal}) {
    const [show, setShow] = useState(false);
    const {user, setUser} = useContext(MyContext)
    const [loading, setLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddToFavorites = () => {
        console.log("mealId", idMeal);
        setLoading(true);
        // axios.post('http://localhost:4000/add-favorites', {mealId: idMeal})
        //     .then((res)=>console.log(res))
        //     .catch((error) => console.log(error))
        httpClient.post('/add-favorites', {mealId: idMeal})
            .then(({data}) => {
                setLoading(false);
                setUser(data)
                alert("Meal Added To Favorites")
            })
            .catch((error) => {
                setLoading(false);
                console.log(error)
            })
    }

    const handleRemoveFromFavorites = () => {
        setLoading(true);
        // axios.post('http://localhost:4000/add-favorites', {mealId: idMeal})
        //     .then((res)=>console.log(res))
        //     .catch((error) => console.log(error))
        httpClient.post('/remove-favorites', {mealId: idMeal})
            .then(({data}) => {
                setLoading(false);
                setUser(data)
                alert("Meal Removed From Favorites")
            })
            .catch((error) => {
                setLoading(false);
                console.log(error)
            })
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                See More
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {user && (
                        <>
                        {user.favorites.includes(idMeal) ? (
                                <Button variant="danger"
                                        onClick={handleRemoveFromFavorites}
                                        disabled={loading}>
                                    Remove From Favorites
                                </Button>
                            ) : (
                                <Button variant="primary"
                                        onClick={handleAddToFavorites}
                                        disabled={loading}>
                                    Add To Favorites
                                </Button>)
                        }
                        </>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    )

}
export default MealModal;