import React, {useContext, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {MyContext} from "../../context";
import {userLikeMealById, userRemoveLikeById } from "../../services/likeServices";
import {isLike} from "../../utilities";
import {addNewComment, deleteCommentByID, findCommentsByMeal} from "../../services/commentServices";
import Form from 'react-bootstrap/Form';
import {ListGroup} from "react-bootstrap";

function MealModal({title, description, idMeal}) {
    const [show, setShow] = useState(false);
    const {user, meals, setMeals} = useContext(MyContext)
    const [like, setLike] = useState(false);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [comment, setComment] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddToLikes = () => {
        setLoading(true)
        userLikeMealById(idMeal)
            .then((data) => {
                setLoading(false);
                meals.push(data)
                setMeals(meals)
                setLike(true)
                alert("Meal Added To Likes")
            }).catch((error) => {
                setLoading(false);
                console.log(error)
            })
    }

    const handleRemoveFromLikes = () => {
        setLoading(true)
        userRemoveLikeById(idMeal)
            .then((data) => {
                setLoading(false);
                const newMeals = meals.filter((m) => {
                    return m.mealId !== idMeal
                })
                setMeals(newMeals)
                setLike(false)
                alert("Meal Removed From Likes")
            }).catch((error) => {
            setLoading(false);
            console.log(error)
        })
    }

    const handleAddComment = () => {
        //all elements of meal
        addNewComment(idMeal, comment)
            .then((data) => {
                setComments(data.comment);
            }).catch((error) => {
            console.log(error)
        })
    }


    const handleRemoveComment = () => {
        deleteCommentByID(idMeal, comment._id)
            .then((data) => {
                const newMeals = meals.filter((m) => {
                    return m.mealId !== idMeal
                })
                setMeals(newMeals)
                //need to delete the comment
                setComment(null);
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect(()=> {
        if(isLike(meals, idMeal)){
            setLike(true);
        }
    },[meals, idMeal])

// only first time render
    useEffect(() => {
        findCommentsByMeal(idMeal)
            .then((data) => {
                if (data[0].comment) {
                    setComments(data[0].comment)
                }
            })
    },[idMeal])

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                See More
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}
                    <div className='mt-3'>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>Comments Textarea:</b></Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e)=> setComment(e.target.value)} />
                    </Form.Group>
                    </div>
                    <div>
                        <Form.Label><b>Comments:</b></Form.Label>
                        {comments.map((comment) =>
                                <ListGroup>
                                    <ListGroup.Item>
                                        {comment.name}: {comment.content} -- {comment.date}
                                        {/*<Button onClick={handleRemoveComment}>Delete comment</Button>*/}
                                    </ListGroup.Item>
                                </ListGroup>
                            // <p>{comment.content}</p>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {user && (
                     <div>

                         <Button variant="primary" onClick={handleAddComment}>
                             Make a Comment
                         </Button>
                     </div>
                    )}
                    {user && (
                        <div>
                        {like ? (
                                <Button variant="danger"
                                        onClick={handleRemoveFromLikes}
                                        disabled={loading}>
                                    Remove From Likes
                                </Button>
                            ) : (
                                <Button variant="primary"
                                        onClick={handleAddToLikes}
                                        disabled={loading}>
                                    Add To Likes
                                </Button>)
                        }
                        </div>
                    )}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default MealModal;