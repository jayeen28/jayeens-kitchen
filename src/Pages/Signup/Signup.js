import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../images/logo.png';
const Signup = () => {

    return (
        <div>
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
                <form className="signin-form">
                    <input className="input-box" type="text" placeholder="Name" />
                    <input className="input-box" type="email" id="sp-email" placeholder="Email" />
                    <input className="input-box" type="password" id="sp-password" placeholder="Password" />
                    <input className="input-box" type="password" placeholder="Confirm password" />
                    <input className="submit-btn" type="submit" value="Sign up" />
                    <Link to='/signup'>Alredy registered?</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;