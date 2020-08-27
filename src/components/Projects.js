import React from "react";
import './Projects.css'
import Clusters from '..\\sos-clusters.PNG'
import PollenPlanter from '..\\pollenplanter.png'

import GitHubMark from '..\\GitHub-Mark-64px.png'
import GitHubMarkLight from '..\\GitHub-Mark-Light-64px.png'
import Link from '..\\cute-link.png'

/* TODO: Make all padding uniform, change photo of SOS-WA to be of just heatmap, more zoomed in*/
/*<a target="_blank" href="https://icons8.com/icons/set/link">Link icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
function Projects() {
    return (

        <div className="section-title" id={'projects'}>
            <p> PROJECTS</p>

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
                            an event where a marine mammal is washed ashore, living or deceased.

                <br />
                            <br />

                Before we collaborated with the LML to create the stradning map, they predominately
                perfomed data visualization and anlysis with tables and graphs. These methods
                don't provide a way to visualize geospatial data which is an important apsect to studying
                marine mammal strandings, so we decided to create the stranding map.

                <br />
                            <br />

                The stranding map allows for the lab to view many data points simutatniosuly,
                highlight areas of interest, and see how the data shifts overtime.
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
                        <p> SOS is an iOS app made with the intention of streamlining the
                            process of reporting a marine mammal stranding. The app is written in Swift
                            and uses Firebase as the database.

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
                    This is a Mobile App that allows the user to get suggestions on what to plant in their
                    garden to help support their native pollinators. Most people are aware of the fact that
                    the bees are dying and a primary reason for this is their dwindling habitat as our world
                    becomes more devleoped. Planting a garden that the bees can pollinate is something that
                    we can all do to help support the bees.

                    https://devpost.com/software/pollenplanter

                </p>

                    </div>




                </div>
            </div>
        </div>

    );
}

export default Projects;
