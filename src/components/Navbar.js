import React from 'react';
import Logo from "../images/aa.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} />
            </div>
            <div className="rightSide">
            <Link to="/"> Introduction </Link> 
            <Link to="/team"> Team </Link> 
            <Link to="/about"> About </Link> 
            </div>
        </div>
    );
}

export default Navbar;


