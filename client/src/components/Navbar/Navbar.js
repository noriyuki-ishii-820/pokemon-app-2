import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

function NavbarComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar><Link to="/">PokeApp</Link></Navbar>
        <Nav className="mr-auto">
          <Nav><Link to="/search">Search</Link></Nav>
          <Nav><Link to="/team">Team</Link></Nav>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
