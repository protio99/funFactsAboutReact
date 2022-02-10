import React from "react";
import logo from '../images/logo.svg'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt='ReactLogo' />
                <h3>ReactFacts</h3>
            </div>
            <h4>React course from Scrimba - Project 1</h4>
        </nav>

    )
}