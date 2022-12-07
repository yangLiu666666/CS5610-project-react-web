import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {MyContext} from "../../context";
import axios from "axios";

function MealModal({title, description, idMeal}) {
    const [show, setShow] = useState(false);
    const {user} = useContext(MyContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddToFavorites = () => {
        console.log("mealId", idMeal);
        axios.post('http://localhost:4000/add-favorites', {mealId: idMeal})
            .then((res)=>console.log(res))
            .catch((error) => console.log(error))
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
                    {user &&
                    <Button variant="primary" onClick={handleAddToFavorites}>
                        Add To Favorites
                    </Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )

}
export default MealModal;