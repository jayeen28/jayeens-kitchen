import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import brandLogo from '../../images/logo.png';
const Signup = () => {
    const { signUp, updateName, setuser, seterror, setisLoading } = useAuth();
    const [userName, setuserName] = useState('');
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('');
    const history = useHistory();
    const redirect_uri = '/home';
    //get sign up form inputs 
    const handleUserName = e => {
        setuserName(e.target.value);
    }
    const handleEmailChange = e => {
        setemail(e.target.value);
    }
    const handlePassChange = e => {
        setpass(e.target.value);
    }
    //handle signup
    const handleSignUp = e => {
        e.preventDefault();
        signUp(email, pass, userName)
            .then(res => {
                setuser(res.user);
                updateName(userName);
                history.push(redirect_uri)
            })
            .catch(error => seterror(error.message))
            .finally(() => setisLoading(false))
    }
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
                <form onSubmit={handleSignUp} className="signin-form">
                    <input className="input-box" type="text" placeholder="Name" onBlur={handleUserName} />
                    <input className="input-box" type="email" onBlur={handleEmailChange} id="sp-email" placeholder="Email" />
                    <input className="input-box" type="password" onBlur={handlePassChange} id="sp-password" placeholder="Password" />
                    <input className="submit-btn" type="submit" value="Sign up" />
                    <Link to='/signin'>Alredy registered?</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;