import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import QrCode from "./QRCODE";
export default function Dashboard() {
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
      <Navbar className="mt-0 w-100" style={{ position: "absolute" }} />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Welcome: {currentUser.email} </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <h4>Enable Camera and Scan QR Code!</h4>
          <div className="h-50 w-100 mt-2">
            <QrCode />
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </>
  );
}
