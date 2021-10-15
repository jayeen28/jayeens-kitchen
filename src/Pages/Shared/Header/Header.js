import React from 'react';
import './Header.css'
import cartBtn from '../../../images/cart.png';
import brandLogo from '../../../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header className="header-section">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="ha" className="brand">
                        <div className="brand-img-shell">
                            <img src={brandLogo} alt="band-logo" className="brand-logo" />
                        </div>
                        <div className="brand-name">
                            <p className="bName-top">Jayeen's Kitchen</p>
                            <p className="bName-bottom">FOODS</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="m-0 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className="cart-btn"><img src={cartBtn} alt="cart button" className="cart-img" /></Nav.Link>
                            <Nav.Link href="#action1" className="login-btn px-3 py-2 m-2 text-dark">Login</Nav.Link>
                            <Nav.Link href="#action2" className="signup-btn text-white m-2 px-4 py-2">Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;