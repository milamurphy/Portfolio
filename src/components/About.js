import React, { useState } from 'react';
import skillsData from '../skills.json';

function About() {
    const [selectedButton, setSelectedButton] = useState('All');
    const buttonNames = ['All', 'Front-End', 'Back-End', 'Tools'];

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const renderSkillIcons = (skills) => {
        return skills.map(skill => (
            <div key={skill.name} className="skillIcon">
                {skill.icon.startsWith('devicon') ? (
                    <i className={skill.icon}></i>
                ) : (
                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.name.toLowerCase()}/${skill.icon}.svg`} alt={skill.name} />
                )}
                {skill.name}
            </div>
        ));
    };

    const renderAllSkills = () => {
        const allSkills = [
            ...skillsData.frontend,
            ...skillsData.backend,
            ...skillsData.tools
        ];
        return renderSkillIcons(allSkills);
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
                    {selectedButton === 'All' && renderAllSkills()}
                    {selectedButton === 'Front-End' && renderSkillIcons(skillsData.frontend)}
                    {selectedButton === 'Back-End' && renderSkillIcons(skillsData.backend)}
                    {selectedButton === 'Tools' && renderSkillIcons(skillsData.tools)}
                </div>
            </div>
        </div>
    );
}

export default About;