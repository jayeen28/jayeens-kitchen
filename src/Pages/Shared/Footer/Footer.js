import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import brandLogo from '../../../images/logo.png'

const Footer = () => {
    return (
        <footer className="footer-section">
            {/* footer section */}
            <div className="container">
                <div className="footer-top">
                    <Link to='/home'>
                        <div className="ft-left">
                            <div className="brand-img-shell">
                                <img src={brandLogo} alt="band-logo" className="brand-logo" />
                            </div>
                            <div className="brand-name">
                                <p className="bName-top text-light"><span style={{ color: '#E51A4B' }}>Jayeen's</span> Kitchen</p>
                                <p className="bName-bottom text-light">FOODS</p>
                            </div>
                        </div>
                    </Link>
                    <div className="ft-right">
                        <div className="links-left">
                            <ul>
                                <li><Link to="/">About online food</Link></li>
                                <li><Link to="/">Read our blog</Link></li>
                                <li><Link to="/signup">Sign up to deliver</Link></li>
                                <li><Link to="/">Add your resturent</Link></li>
                            </ul>
                        </div>
                        <div className="links-right">
                            <ul>
                                <li><Link to="/">Get help</Link></li>
                                <li><Link to="/">Read FAQs</Link></li>
                                <li><Link to="/">View all cities</Link></li>
                                <li><Link to="/">Resturents near me</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;