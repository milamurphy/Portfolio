import React, { useContext } from "react";
import { ThemeContext } from '../ThemeContext';

function Home() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`homeContainer ${theme}`}>
            <div className="home">
                <div className="greetingText">Hi there, I'm</div>
                <div className="milaText">Mila Murphy</div>
                <div className="softwareText">Software Developer</div>  
                <div className="homeTextContainer">
                    I’m passionate about transforming ideas into reality through software. Currently seeking an internship as part of my academic course.
                </div>
                <div className="buttonsContainer">
                    <button><img src="https://img.icons8.com/fluency-systems-filled/48/99ffb5/regular-document.png" alt="resume icon" />Resume</button>
                    <button><img src="https://img.icons8.com/fluency-systems-filled/48/99ffb5/github.png" alt="github icon" />GitHub</button>
                    <button><img src="https://img.icons8.com/fluency-systems-filled/48/99ffb5/linkedin.png" alt="linkedin icon" />LinkedIn</button>
                    <button><img src="https://img.icons8.com/fluency-systems-filled/48/99ffb5/new-post.png" alt="email icon" />Email</button>
                </div>
            </div>
        </div>
    );
}

export default Home;