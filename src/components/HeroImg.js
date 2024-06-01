import "./style/HeroImg.css"
import React from "react"
import HeroImage from "../assets/hero-image1.jpg"
import {Link} from "react-router-dom";

//Home Page Hero
export default function HeroImg() {
    return (
        <div className="hero">
            <div className="mask">
                <img className="hero-img" src={HeroImage} alt={HeroImage}></img>
            </div>

            <div className="content">
                <p>Hi, I'm a Software Engineer.</p>
                <h2>Java Developer</h2>
                <div>
                    <Link to="/projects" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    );
}