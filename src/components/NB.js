import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
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
        className="navbar navbar-expand-lg navbar-dark navbar-custom"
      >
        <Navbar.Brand>
          <Link to="/">
            <strong>
              <span className="navbar-brand"> MediCheck</span>
            </strong>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-3">
            <Nav.Item className="mr-3">
              <Link to="/manufacturer" className="navbar-item">
                Dashboard
              </Link>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <Link to="/createshipment" className="navbar-item">
                Create Shipment
              </Link>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <Link to="/updateprofile" className="navbar-item">
                Update Profile
              </Link>
            </Nav.Item>
            <Nav.Item className="mr-3 navbar-item" onClick={handleLogOut}>
              Logout
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
