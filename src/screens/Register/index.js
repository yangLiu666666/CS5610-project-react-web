import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useContext, useState} from 'react';
// import axios from "axios";
import {MyContext} from "../../context";
import {useNavigate} from "react-router-dom";
import httpClient from "../../Axios";
function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(MyContext);
    function handleRegister(e) {
        e.preventDefault();
        //If email or password doesn't exist
        if (!email || !password) {
            return alert('Please filled out the fields');
        }
        httpClient.post('/users', {email, password})
            .then(({data}) => {
                setUser(data);
                localStorage.setItem('token', data.token);
                navigate("/");
            })
            .catch((error)=>console.log(error));
    }
    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Register;