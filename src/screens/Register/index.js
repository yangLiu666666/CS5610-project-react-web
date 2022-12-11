import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useContext, useState} from 'react';
import {MyContext} from "../../context";
import { useNavigate } from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {register} from "../../services/userServices";
function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const {setUser} = useContext(MyContext);

    function handleRegister(e) {
        e.preventDefault();
        //If email or password doesn't exist
        if (!email || !password ||!name) {
            return alert('Please filled out the fields');
        }
        register(email, password, role, name, country)
            .then((data) => {
                setUser(data);
                localStorage.setItem('token', data.token);
                navigate("/");
            })
            .catch((error)=>console.log(error));
    }
    return (
        <Container>
            <Row>
                <Col md={7} className="d-flex align-items-center justify-content-center">
                    <Form onSubmit={handleRegister} className="login-form">
                        <h1 className="text-center">Register</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Nickname</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required
                            />
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

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Country</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your country"
                                onChange={(e) => setCountry(e.target.value)}
                                value={country}
                                required
                            />
                        </Form.Group>

                        <div>
                            <div className="row justify-content-center">
                                <label>
                                    Role:
                                    <select defaultValue={"user"} className="form-select form-select-sm m-1" aria-label="Default select example"
                                            onChange={(e) => setRole(e.target.value)}>
                                        <option value="user">User</option>
                                        <option value="premium">Premium</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="row mb-3 mt-4 justify-content-center">
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        </div>
                    </Form>
                </Col>
                <Col md={5} className="login-bg-container"></Col>
            </Row>
        </Container>
    );
}
export default Register;
