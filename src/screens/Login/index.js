import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useContext, useState} from "react";
// import axios from "axios";
import {MyContext} from "../../context";
import {Link, useNavigate} from "react-router-dom";
import httpClient from "../../Axios";
import {Col, Container, Row} from "react-bootstrap";
import "./index.css"
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(MyContext);
    function handleLogin(e) {
        e.preventDefault();
        //If email or password doesn't exist
        if (!email || !password) {
            return alert('Please filled out the fields');
        }
        // axios.post('http://localhost:4000/login', {email, password})
        //     .then(({data}) => {
        //         localStorage.setItem('token', data.token);
        //         setUser(data);
        //         navigate("/");
        //     })
        //     .catch((error)=>console.log(error));
        httpClient.post('/login', {email, password})
            .then(({data}) => {
                localStorage.setItem('token', data.token);
                setUser(data);
                navigate("/");
            })
            .catch((error)=>console.log(error));
    }
    return (
        <Container>
            <Row>
                <Col md={7} className="d-flex align-items-center justify-content-center">
                    <Form onSubmit={handleLogin} className="login-form">
                        <h1 className="text-center">Login</h1>
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
                        <div className="row mb-3 mt-4 justify-content-center">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        </div>
                        <div className="py-4">
                            <p className="text-center">
                                Don't have an account?<Link to="/register">Register</Link>
                            </p>
                        </div>
                    </Form>
                </Col>
                <Col md={5} className="login-bg-container"></Col>
            </Row>
        </Container>
    );
}

export default Login;