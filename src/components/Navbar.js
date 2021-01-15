import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
export default function NavBar() {
  return (
    <>
      <Navbar sticky="top" bg="dark" expand="lg">
        <Navbar.Brand>
          <span className="brand">Drug Tracking System</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-3">
            <Nav.Item className="mr-3">
              <Link to="/" className="navbar-item">
                Dashboard
              </Link>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <Link to="/updateprofile" className="navbar-item">
                Update Profile
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
