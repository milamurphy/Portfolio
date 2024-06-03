import React from "react";

function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutMeColumn">
                <div class="headingText">About Me</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, magna quis porttitor congue, lacus enim pharetra nisl, elementum tristique ex ipsum ac neque. Vivamus non fermentum massa.
                </p>
                <br></br>
                <p>
                    Mauris auctor est nec orci consequat, sed dignissim diam porta. Aenean pretium eget metus vel egestas. Etiam est nulla, egestas sit amet nulla nec, vulputate tristique lorem. Sed at ex nec enim lacinia vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla quis arcu tellus.
                </p>
            </div>
            <div class="skillsColumn">
                <div class="headingText">Skills</div>
                <div class="skillsButtonsContainer">
                    <button>All</button><button>Front-End</button><button>Back-End</button><button>Tools</button>
                </div>
            </div>
        </div>
    );
}

export default About;