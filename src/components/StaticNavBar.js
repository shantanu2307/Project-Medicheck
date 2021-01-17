import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
export default function StaticNavBar() {
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
      </Navbar>
    </>
  );
}
