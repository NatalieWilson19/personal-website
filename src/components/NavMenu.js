import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavMenu() {

  return (
    <div>
        <Navbar className="navbar-text" expand="lg">
        Natalie Wilson
      <Navbar className="navigation" expand="lg">
        <Navbar.Brand href="/">
         {/* <img src={require('./butterfly.png')} alt="logo" height="45" width="115"/>*/}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="faq">Projects</Nav.Link>
            <Nav.Link href="about">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </Navbar>
    </div>
  );
}

export default NavMenu;
