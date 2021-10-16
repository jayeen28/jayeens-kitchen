import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className="signin-page">
            <div className="container">
                <div className="sin-contents">
                    <div className="sin-brand">

                    </div>
                    <form action="">
                        <input type="email" />
                        <input type="password" />
                        <input type="submit" value="Sign in" />
                        <Link to='/signup'>New here?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;