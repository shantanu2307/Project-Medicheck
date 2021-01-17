import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import QrCode from "./QRCODE";
import { useAuth } from "../contexts/AuthContext";
export default function Dashboard() {
  const { currentUser } = useAuth();
  const [keyRef, setkeyRef] = useState("shantanu");
  const [privateKeyRef, setPrivateKeyRef] = useState();
  return (
    <>
      <Navbar className="mt-0 w-100" style={{ position: "absolute" }} />
      <h1 className="text-center">Welcome {currentUser.email}</h1>
      <div className="mt-4 fs-5 text-center ">
        Kindly Scan the product or enter the product ID.
      </div>
      <br />
      <br />
      <div>
        <Form className="d-grid absolute-center justify-content-center">
          <Form.Group>
            <Form.Label className="text-center">Product ID :</Form.Label>
            <Form.Control className="w-100" type="text" value={keyRef} />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-center">Private Key</Form.Label>
            <Form.Control ref={privateKeyRef} className="w-100" type="text" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              width: "15rem",
              margin: "20px",
              backgroundColor: "blueviolet",
              color: "white",
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
      <br />
      <Card
        className="container mt-lg-5 mb-lg-5"
        style={{ height: "400px", width: "400px" }}
      >
        <Card.Header className="bg-white">
          <h1 className="text-center">SCAN QR CODE</h1>
        </Card.Header>
        <Card.Body>
          <div className="h-50 w-100 mt-2">
            <QrCode />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
