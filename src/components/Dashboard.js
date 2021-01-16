import React from "react";
import { Card } from "react-bootstrap";
import Navbar from "./Navbar";
import QrCode from "./QRCODE";
import { useAuth } from "../contexts/AuthContext";
export default function Dashboard() {
  const { currentUser } = useAuth();
  return (
    <>
      <Navbar className="mt-0 w-100" style={{ position: "absolute" }} />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Welcome: {currentUser.email} </h2>
          <h4>Enable Camera and Scan QR Code!</h4>
          <div className="h-50 w-100 mt-2">
            <QrCode />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
