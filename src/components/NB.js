import React, { useState } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import "./App.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
export default function NavBar() {
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  async function handleLogOut() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch (e) {
      setError("Failed to logout!");
    }
  }

  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        style={{ backgroundColor: "rgb(93, 7, 173)" }}
      >
        <Navbar.Brand>
          <Link to="/" className="mr-lg-4" style={{ color: "white" }}>
            MediCheck
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Link to="/createshipment" className="navbar-item mr-lg-3">
                Create Shipment
              </Link>
            </Nav.Item>
            <Nav.Item>
              <div
                onClick={handleLogOut}
                className="navbar-item logout-div mr-lg-3"
              >
                Logout
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
