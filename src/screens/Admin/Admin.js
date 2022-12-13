import React, {useContext, useEffect, useState} from "react";
import {MyContext} from "../../context";
import {ListGroup} from "react-bootstrap";
import {deleteUserById, findUserById} from "../../services/userServices";
import Button from "react-bootstrap/Button";

function Admin() {
    const {user, setUser} = useContext(MyContext);

    const findUsers = () => {
        findUserById(user._id)
            .then((data) => {
                setUser(data)
            })
            .catch((error) => {console.log(error)
            })
    }
    function deleteUser() {
        deleteUserById(user._id).then(() => {
            setUser('')
        })
    }
    useEffect(() => {
        findUsers()
    })

    return (
        <div>
            <h1>Admin</h1>
            <ListGroup>
                <ListGroup.Item><h3>Users List</h3></ListGroup.Item>
                <ListGroup.Item>
                    <h5>Email: {user.email}</h5><Button onClick={deleteUser}>Delete User</Button>
                </ListGroup.Item>
            </ListGroup>
        </div>

    )
}
export default Admin;