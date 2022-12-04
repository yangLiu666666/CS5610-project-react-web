import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

function AppNavbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">Meals</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/home">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
                            {/*<Nav.Link href="/login">Login</Nav.Link>*/}
                            {/*<Nav.Link href="/register">Register</Nav.Link>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )

}
export default AppNavbar;