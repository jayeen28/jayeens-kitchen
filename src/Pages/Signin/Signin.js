import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import brandLogo from "../../images/logo.png";
import './signin.css';
const Signin = () => {
    const { signIn } = useAuth();
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const handleEmailChange = e => {
        setemail(e.target.value);
    }
    const handlePassChange = e => {
        setpass(e.target.value);
    }
    //handle signin
    const handleSignIn = e => {
        e.preventDefault();
        signIn(email, pass);
    }
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
                    <form onSubmit={handleSignIn} className="signin-form">
                        <input className="input-box" type="email" placeholder="Your email" onBlur={handleEmailChange} />
                        <input className="input-box" type="password" placeholder="Your password" onBlur={handlePassChange} />
                        <input className="submit-btn" type="submit" value="Sign in" />
                        <Link to='/signup'>New here?</Link>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Signin;