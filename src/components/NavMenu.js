import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavMenu() {

  return (
    <div>
        <Navbar className="navigation" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Text>
                        Natalie Wilson
                    </Navbar.Text>
                </Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="faq">Projects</Nav.Link>
            <Nav.Link href="about">Contact</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavMenu;
