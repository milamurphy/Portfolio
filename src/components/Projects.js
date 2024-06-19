import React from "react";
import temp1 from '../images/temp1.png';
import temp2 from '../images/temp2.png';
import temp3 from '../images/temp3.png';

function Projects() {
    return (
        <div className="projectsContainer">
            <div className="projectColumn">
                <div className="project">
                    <img src={temp1} alt="Project 1" />
                    <div className="projectTitle">Picnet</div>
                    <div className="projectDesc">All the resources you will need to get a boost into economics.</div>
                </div>
            </div>
            <div class="projectColumn">
                <div className="project">
                    <img src={temp2} alt = "Project 2"/>
                    <div className="projectTitle">Bug's Life</div>
                    <div className="projectDesc">All the resources you will need to get a boost into economics.</div>
                </div>
            </div>
            <div class="projectColumn">
                <div className="project">
                    <img src={temp3} alt = "Project 3"/>
                    <div className="projectTitle">StyleKoi</div>
                    <div className="projectDesc">All the resources you will need to get a boost into economics.</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;