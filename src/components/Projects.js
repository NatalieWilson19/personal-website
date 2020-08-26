import React from "react";
import './Projects.css'
import Clusters from '..\\sos-clusters.PNG'
import PollenPlanter from '..\\pollenplanter.png'

/* TODO: Make all padding uniform, change photo of SOS-WA to be of just heatmap, more zoomed in*/

function Projects() {
    return(

        <div className="section-title" id={'projects'}>
            <p> PROJECTS</p>

        <div className="project-title">
            <p> SOS WA</p>
            <div className="sos-wa">
            <img src={Clusters} className="sos-photo" alt="clusters"></img>    

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
                highlight areas of interest, and see how the data shifts overtime. Check it out 

                <a href={"http://lmlstrandingmap.herokuapp.com/"} className="link" target="_blank" rel="noopener noreferrer"> here! </a> 
            </p>
            
            </div>
            </div>

            <div className="project-title">

            <p> PollenPlanter</p>

            <div className="pp">
            <img src={PollenPlanter} className="pp-photo" alt="pollen"></img>    

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

    );
}

export default Projects;
