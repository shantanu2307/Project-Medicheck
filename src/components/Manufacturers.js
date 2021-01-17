import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import Navbar from "./NB";
import QrCode from "./QRCODE";
import { useAuth } from "../contexts/AuthContext";
export default function Manufacturers() {
  const { currentUser } = useAuth();
  return (
    <>
      <Navbar className="mt-0 w-100" style={{ position: "absolute" }} />
      <h1>Welcome {currentUser.email}</h1>
      <div className="mt-4 text-primary fs-5 ">
        To track the medicine, kindly enter Product ID or scan QR code.
      </div>
      <br />
      <br />
      <div>
        <Form className="d-grid absolute-center justify-content-center">
          <Form.Group>
            <Form.Label className="text-center">Product ID :</Form.Label>
            <Form.Control
              className="w-100"
              type="text"
              placeholder="Enter Product ID"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <br />
      <Card className="container mt-lg-5">
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
