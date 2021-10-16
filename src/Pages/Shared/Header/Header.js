import React from 'react';
import './Header.css'
import cartBtn from '../../../images/cart.png';
import brandLogo from '../../../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-section">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to='/home'>
                        <Navbar.Brand className="brand">
                            <div className="brand-img-shell">
                                <img src={brandLogo} alt="band-logo" className="brand-logo" />
                            </div>
                            <div className="brand-name">
                                <p className="bName-top"><span style={{ color: '#E51A4B' }}>Jayeen's</span> Kitchen</p>
                                <p className="bName-bottom">FOODS</p>
                            </div>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="m-0 my-lg-0 align-items-center hr-btn"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link href="#action1" className="cart-btn"><img src={cartBtn} alt="cart button" className="cart-img" /></Link>
                            <Link to='/signin' className="login-btn px-3 py-2 m-2 text-dark">Sign in</Link>
                            <Link to='/signup' className="signup-btn text-white m-2 px-4 py-2">Sign up</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;