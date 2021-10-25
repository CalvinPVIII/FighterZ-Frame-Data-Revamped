import "../styles/Header.css";
import React, { useState, useEffect } from "react";
import logo from "../images/dbfzlogo.png";
import swirl from "../images/swirl.png";
import Navbar from "./Navbar";

function Header() {
    return (
        <div className="header">
            <div className="header-wrapper">
                <img src={swirl} className="swirl" alt="swirl" />
                <img
                    src={logo}
                    className="dbfz-logo"
                    alt="Dragon Ball FighterZ Logo"
                />
            </div>
            <Navbar />
        </div>
    );
}

export default Header;
