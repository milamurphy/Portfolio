import React, { useContext } from "react";
import { ThemeContext } from '../ThemeContext';

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`navbarContainer ${theme}`}>
            <div className="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
                <img width="25" height="25" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/crescent-moon.png" alt="moon icon" style={{ cursor: "pointer" }} onClick={toggleTheme}/>
            </div>
        </div>
    );
}

export default Navbar;