import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ListGroup} from "react-bootstrap";
import React, {useState} from "react";

function FollowComponent({users, userType}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title>{userType}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {users.map((u)=>
                        <ListGroup>
                            <ListGroup.Item>{u.email}</ListGroup.Item>
                        </ListGroup>
                    )}
                </Modal.Body>

            </Modal.Dialog>
        </div>
    );
}

export default FollowComponent;