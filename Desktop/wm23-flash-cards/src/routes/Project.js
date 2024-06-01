import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";

export default function Projects() {
    return (
        <div>
            <Navbar/>
            <HeroImg2 header="PROJECTS" text="List of some of my recent projects."/>
            <Work/>
            <Footer/>
        </div>
    );
}

//Project Route Component structure