import React from "react";

function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
                <img width="25" height="25" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/crescent-moon.png" alt="moon icon"/>
            </div>
        </div>
    );
}

export default Navbar;