import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import brandLogo from "../../images/logo.png";
import './signin.css';
import googleBtn from '../../images/google-btn.png'
const Signin = () => {
    const { signIn, setuser, seterror, setisLoading, signInGoogle } = useAuth();
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleEmailChange = e => {
        setemail(e.target.value);
    }
    const handlePassChange = e => {
        setpass(e.target.value);
    }
    //handle signin
    const handleSignIn = e => {
        e.preventDefault();
        signIn(email, pass)
            .then(res => {
                setuser(res.user);
                history.push(redirect_uri);
            })
            .catch(error => seterror(error.message))
            .finally(() => setisLoading(false))
    }
    const googleSignIn = () => {
        signInGoogle()
            .then(res => {
                history.push(redirect_uri);
            });
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
                    <div className="brand-signin-btns">
                        <div className="google-btn">
                            <img onClick={googleSignIn} src={googleBtn} alt="googlebtn" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Signin;