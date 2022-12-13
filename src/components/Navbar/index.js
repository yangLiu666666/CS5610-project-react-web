import React, {useContext} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import {MyContext} from "../../context";
import {useNavigate} from "react-router-dom";
import {logout} from "../../services/userServices";

function AppNavbar() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(MyContext);

    const handleLogout = ()=>{
        logout()
            .then(() => {
                localStorage.removeItem("token");
                setUser('');
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
                                <LinkContainer to={`/profile/${user._id}`}>
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