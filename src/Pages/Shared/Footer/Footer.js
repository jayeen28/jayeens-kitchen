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
                    <div className="ft-left">
                        <div className="brand-img-shell">
                            <img src={brandLogo} alt="band-logo" className="brand-logo" />
                        </div>
                        <div className="brand-name">
                            <p className="bName-top text-light"><span style={{ color: '#E51A4B' }}>Jayeen's</span> Kitchen</p>
                            <p className="bName-bottom text-light">FOODS</p>
                        </div>
                    </div>
                    <div className="ft-right">
                        <div className="links-left">
                            <ul>
                                <li><Link>About online food</Link></li>
                                <li><Link>Read our blog</Link></li>
                                <li><Link>Sign up to deliver</Link></li>
                                <li><Link>Add your resturent</Link></li>
                            </ul>
                        </div>
                        <div className="links-right">
                            <ul>
                                <li><Link>Get help</Link></li>
                                <li><Link>Read FAQs</Link></li>
                                <li><Link>View all cities</Link></li>
                                <li><Link>Resturents near me</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;