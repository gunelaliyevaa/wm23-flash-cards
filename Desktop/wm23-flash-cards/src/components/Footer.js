import React from 'react';
import "./style/Footer.css"
import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <h4>
                            <FaHome size={20} style={{color: "white", marginRight: "2rem"}}/>
                            Baku, Azerbaijan.
                        </h4>

                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{color: "white", marginRight: "2rem"}}/>
                            +994 50 000 00 00
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}}/>
                            gunelaliyevaa07@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>
                        Gunel Aliyeva, ADA University computer science student passionate about software development.
                        Explore my projects and connect for collaboration. Let's innovate together!
                    </p>
                    <div className="social">
                        <FaGithub size={30} style={{color: "white", marginRight: "1rem"}}/>
                        <FaLinkedin size={30} style={{color: "white", marginRight: "1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
