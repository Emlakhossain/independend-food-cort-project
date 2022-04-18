import { Button } from 'bootstrap';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='logo-img' height={45} width={50} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="services">Services</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='border rounded sign-out' onClick={handleSignOut}>Sign Out</button>

                                    :
                                    <Nav.Link as={Link} to="/login">Login </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;