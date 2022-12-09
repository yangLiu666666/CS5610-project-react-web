import React, {useContext} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import {MyContext} from "../../context";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import httpClient from "../../Axios"

function AppNavbar() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(MyContext);

    // have some problems
    // const handleLogout = ()=>{
    //     axios.post('http://localhost:4000/logout')
    //         .then(({data}) => {
    //             localStorage.removeItem("token");
    //             setUser(null);
    //             navigate("/");
    //     })
    // }
    const handleLogout = ()=>{
        httpClient.post('/logout')
            .then(() => {
                localStorage.removeItem("token");
                setUser(null);
                navigate("/");
            })
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Meals</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {!user && (
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        )}
                        {user && (
                            <Nav>
                                <LinkContainer to="/profile">
                                    <Nav.Link>Profile</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/">
                                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )

}
export default AppNavbar;