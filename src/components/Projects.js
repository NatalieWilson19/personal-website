import React from "react";
import './Projects.css'
import GitHubMark from './GitHub-Mark-64px.png'
import Link from './cute-link.png'

/* TODO: Make all padding uniform, change photo of SOS-WA to be of just heatmap, more zoomed in*/
/*<a target="_blank" href="https://icons8.com/icons/set/link">Link icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
function Projects() {
    return (

        <div className="section-title" id={'projects'} display={'block'}>
            <p> projects </p>

            <div className="project-title">

                <a href="https://github.com/lmlstrandingnetwork/lml-stranding-map" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubMark} className="github-mark" alt="github-mark"></img>
                </a>
                <a href="http://lmlstrandingmap.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={Link} className="link-logo" alt="link"></img>
                </a>
                <p> Long Marine Lab Stranding Map</p>
                <div className="project-subtitle">

                    <p> Data Visualization Web App
                    <br />
                Urbica React Map GL, Firebase, Algolia, Heroku </p>
                    <div className="description">

                        <p>
                            For my senior Capstone project, my team collaborated with the UCSC Long Marine Lab (LML) to create a
                            data visualization web app to help them track marine mammal strandings,
                            an event where a marine mammal has washed ashore, living or deceased.

                <br />
                            <br />

                Before we collaborated with the LML to create the stranding map, the LML predominately
                performed data visualization and analysis through tables and graphs. These methods, though important,
                don't provide a way to visualize geospatial data which is an important aspect of the data
                that the LML collects.

                This is what inspired us to create the stranding map. The stranding map allows the user to
                view multiple data points simultaneously, identify areas of interest, and visualize how the data
                changes over time. 

                        </p>

                    </div>
                </div>
            </div>


            <div className="project-title">
                <a href="https://github.com/paulyakovlev/pollenplanter" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubMark} className="github-mark" alt="github-mark"></img>
                </a>
                <p> Save Our Species (SOS) </p>

                <div className="project-subtitle">
                    <p> iOS App
                        <br />
                        Swift, Firebase </p>

                    <div className="description">
                        <p> SOS is an iOS app made to streamline the
                            process of reporting a marine mammal stranding. When the user selects "report", the app opens
                            a map where you drop a pin to select your location. The user can also add a short
                            description of the incident. An authenticated user can then login to the app to
                            view a list of reports that users have made.
                </p>

                    </div>

                </div>
                </div>

            <div className="project-title">
                <a href="https://github.com/paulyakovlev/pollenplanter" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubMark} className="github-mark" alt="github-mark"></img>
                </a>
                <p> PollenPlanter</p>

                <div className="project-subtitle">
                    <p> Mobile App
                        <br /> 
                        React Native </p>

                    <div className="description">

                        <p>
                            Won first place in the EarthHacks category at CruzHacks 2020.
                    <br />
                            <br />
                    PollenPlanter is a Mobile App that allows the user to get suggestions on what to plant in their
                    garden to help support their native pollinators. Most people are aware of the fact that
                    the bees are dying at an alarming rate. A primary reason for this is their dwindling habitat as our world
                    becomes more developed. Planting a garden that the bees can pollinate is something that
                    anyone can do to help support the bees.

                </p>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Projects;
