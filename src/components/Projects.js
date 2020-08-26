import React from "react";
import './Projects.css'
import Clusters from '..\\sos-clusters.PNG'

function Projects() {
    return(

        <div className="section-title" id={'projects'}>
            <p> PROJECTS</p>

        <div className="project-title">
            <p> SOS WA</p>
            <div className="sos-wa">
            <img src={Clusters} className="photo" alt="clusters"></img>    

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

            </div>
    );
}

export default Projects;
