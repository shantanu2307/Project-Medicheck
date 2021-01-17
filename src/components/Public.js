import React, { useState, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import QrCode from "./QRCODE";
import axios from "axios";
import StaticNavBar from "./StaticNavBar";
export default function Public() {
  const productIdRef = useRef();
  const [idState, setidState] = useState("");
  const [loading, setLoading] = useState(true);
  function getData(data) {
    setidState(data);
    setLoading(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <StaticNavBar />
      <h1 className="header text-center"> Welcome Customer!</h1>
      <div className="mt-4 fs-5 text-center ">
        To check for authenticity, scan using QR Code or enter product ID.
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
              ref={productIdRef}
              value={idState}
              placeholder="Enter Product ID"
            />
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
      <br />
      {loading && (
        <Card
          className="container mt-lg-5 mb-lg-5"
          style={{ height: "400px", width: "400px" }}
        >
          <Card.Header className="bg-white">
            <h1 className="text-center">SCAN QR CODE</h1>
          </Card.Header>
          <Card.Body>
            <div className="h-50 w-100 mt-2">
              <QrCode xd={getData} />
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
