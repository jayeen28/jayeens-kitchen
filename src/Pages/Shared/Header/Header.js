import React from 'react';
import './Header.css'
import cartBtn from '../../../images/cart.png';
import brandLogo from '../../../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header-section">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="ha"><img src={brandLogo} alt="band-logo" className="brand-logo" /><span>Jayeen's Kitchen</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="m-0 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1"><img src={cartBtn} alt="cart button" style={{ height: '30px', width: '30px' }} /></Nav.Link>
                            <Nav.Link href="#action1">Login</Nav.Link>
                            <Nav.Link href="#action2">Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;