import React, { useState } from 'react';

function About() {
    const [selectedButton, setSelectedButton] = useState('All');
    const buttonNames = ['All', 'Front-End', 'Back-End', 'Tools'];
    const frontend = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'SCSS'];
    const backend = ['Java', 'Python', 'C++', 'MongoDB', 'Firebase', 'MySql'];
    const tools = ['Figma', 'GitHub', 'VS Code'];

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className="aboutContainer">
            <div className="aboutMeColumn">
                <div className="headingText">About Me</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, magna quis porttitor congue, lacus enim pharetra nisl, elementum tristique ex ipsum ac neque. Vivamus non fermentum massa.
                </p>
                <br></br>
                <p>
                    Mauris auctor est nec orci consequat, sed dignissim diam porta. Aenean pretium eget metus vel egestas. Etiam est nulla, egestas sit amet nulla nec, vulputate tristique lorem. Sed at ex nec enim lacinia vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla quis arcu tellus.
                </p>
            </div>
            <div className="skillsColumn">
                <div className="headingText">Skills</div>
                <div className="skillsButtonsContainer">
                    {buttonNames.map(buttonName => (
                        <button
                            key={buttonName}
                            style={{
                                backgroundColor: selectedButton === buttonName ? '#99FFB5' : 'transparent',
                                color: selectedButton === buttonName ? 'black' : 'white'
                            }}
                            onClick={() => handleButtonClick(buttonName)}
                        >
                            {buttonName}
                        </button>
                    ))}
                </div>
                <div className="skillsIconsContainer">
                    <div className="skillIcon"><i className="devicon-html5-plain colored"></i>HTML</div>
                    <div className="skillIcon"><i className="devicon-css3-plain colored"></i>CSS</div>
                    <div className="skillIcon"><i className="devicon-javascript-plain colored"></i>JavaScript</div>
                    <div className="skillIcon"><i className="devicon-react-plain colored"></i>React</div>
                    <div className="skillIcon"><i className="devicon-tailwindcss-plain colored"></i>Tailwind</div>
                    <div className="skillIcon"><i className="devicon-sass-plain colored"></i>SCSS</div>
                    <div className="skillIcon"><i className="devicon-java-plain colored"></i>Java</div>
                    <div className="skillIcon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"></img>Python</div>
                    <div className="skillIcon"><i className="devicon-cplusplus-plain colored"></i>C++</div>
                    <div className="skillIcon"><i className="devicon-mongodb-plain colored"></i>MongoDB</div>
                    <div className="skillIcon"><i className="devicon-firebase-plain colored"></i>Firebase</div>
                    <div className="skillIcon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />Figma</div>
                    <div className="skillIcon"><i className="devicon-github-plain colored"></i>GitHub</div>
                    <div className="skillIcon"><i className="devicon-vscode-plain colored"></i>VS Code</div>
                    <div className="skillIcon"><i className="devicon-mysql-plain colored"></i>MySql</div>
                </div>
            </div>
        </div>
    );
}

export default About;