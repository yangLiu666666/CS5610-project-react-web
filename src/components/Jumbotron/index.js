import React from 'react';
import "./index.css";
import {InputGroup, Form, Button} from "react-bootstrap";

function MyJumbotron() {
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
                />
                <Button variant="danger" id="meal-search-button">
                    Button
                </Button>
            </InputGroup>
            </div>
        </div>
    )

}
export default MyJumbotron;