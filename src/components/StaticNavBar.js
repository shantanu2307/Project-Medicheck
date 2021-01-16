import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
export default function StaticNavBar() {
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
      </Navbar>
    </>
  );
}
