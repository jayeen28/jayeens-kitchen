import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from "../../images/logo.png";
import './signin.css';
const Signin = () => {
    return (
        <div className="signin-page">
            <div className="container">
                <div className="sin-contents">
                    <div className="sin-brand">
                        <div className="sin-left">
                            <Link to="/home">
                                <div className="brand-img-shell">
                                    <img src={brandLogo} alt="band-logo" className="brand-logo" />
                                </div>
                            </Link>
                            <Link to="/home">
                                <div className="brand-name">
                                    <p className="bName-top text-dark"><span style={{ color: '#E51A4B' }}>Jayeen's</span> Kitchen</p>
                                    <p className="bName-bottom text-dark">FOODS</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <form action="" className="signin-form">
                        <input className="input-box" type="email" placeholder="Your email" />
                        <input className="input-box" type="password" placeholder="Your password" />
                        <input className="submit-btn" type="submit" value="Sign in" />
                        <Link to='/signup'>New here?</Link>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Signin;