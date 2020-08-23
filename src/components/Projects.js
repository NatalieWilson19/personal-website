import React from "react";
import './Projects.css'
import Clusters from '..\\sos-clusters.PNG'

function Projects() {
    return(

        <div className="section-title" id={'projects'}>
            <p> PROJECTS</p>

        <div className="project-title">
            <p> SOS WA</p>
                <img src={Clusters} className="photo" alt="clusters"></img>
                
            <div className="sos-wa">
            <p>
                With a team of my peers for our senior Capstone project,
                we collaborated with the UCSC Long Marine Lab to create a 
                data visualization web app to help them track marine mammal strandings,
                an event where a marine mammal is washed ashore, living or deceased.
                Before we collaborated with the LML to create the stradning map, they predominately
                perfomed data visualization and anlysis with tables and graphs. However, these methods
                don't provide a way to visualize geospatial data which is an important apsect to studying
                marine mammal strandings.

                The stranding map allows for the lab to view many data points simutatniosuly,
                highlight areas of interest, and see how the data shifts overtime.



                <a href={"http://lmlstrandingmap.herokuapp.com/"}> Check it out here! </a> 
            </p>
            </div>
            </div>
        </div>
    );
}

export default Projects;
