import React from "react";
import { Form, Button } from "react-bootstrap";
import QrCode from "./QRCODE";
import StaticNavBar from "./StaticNavBar";
export default function Public() {
  return (
    <div>
      <StaticNavBar />
      <h1 className="header text-center"> Welcome Customer!</h1>
      <div className="mt-4 text-primary fs-5 ">
        To check for authenticity, scan using QR Code or enter product ID.
      </div>
      <br />
      <br />
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Product ID</Form.Label>
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
      <div>
        <div className="h-50 w-100 mt-2">
          <QrCode />
        </div>
      </div>
    </div>
  );
}