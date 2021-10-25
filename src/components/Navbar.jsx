import "../styles/Navbar.css";
import React, { useState, useEffect } from "react";
import NavCorner from "./NavCorner";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-top" />
            <div className="top-left-corner">
                <NavCorner />
            </div>
            <div className="top-right-corner">
                <NavCorner />
            </div>
            <div className="navbar-text-wrapper">
                <p>text 1</p>
                <p>text 2</p>
                <p>text 3</p>
            </div>
            <div className="bottom-left-corner">
                <NavCorner />
            </div>
            <div className="bottom-right-corner">
                <NavCorner />
            </div>
            <div className="navbar-bottom" />
        </div>
    );
}

export default Navbar;
