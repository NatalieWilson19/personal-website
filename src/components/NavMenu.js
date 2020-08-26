import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./Resume.pdf";


/* I used this website: https://getwaves.io/ to generate the svg code to create the wave */
function NavMenu() {

  return (
    <div>
        <Navbar className="navigation" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Text color="#ffffff">
                        Natalie Wilson
                    </Navbar.Text>
                </Nav>
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="#projects" id="projects-id">Projects</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
            <Nav.Link href={Resume} target="_blank">Resume</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">

    <path fill="url(#MyGradient" d="M0,224L40,197.3C80,171,160,117,240,85.3C320,53,400,43,480,64C560,85,640,139,720,170.7C800,203,880,213,960,186.7C1040,160,1120,96,1200,69.3C1280,43,1360,53,1400,58.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
    <defs>
    <linearGradient id="MyGradient">
          <stop offset="0%" stop-color="#f0027f" />
          <stop offset="100%" stop-color="#754895" />
        </linearGradient>
    </defs>
</svg>
    </div>
  );
}

export default NavMenu;
