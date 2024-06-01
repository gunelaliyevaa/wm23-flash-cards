import React from 'react'
import './index.css'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Project from './routes/Project'
import Cards from './routes/Cards'
import {Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/projects" element={<Project/>}/>
                <Route path="/cards" element={<Cards/>}/>
            </Routes>
        </>
    );
}

