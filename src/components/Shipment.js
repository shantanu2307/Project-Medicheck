import React, { useRef } from "react";
import Navbar from "./NB";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
export default function Shipment() {
  const prodNumRef = useRef();
  const nameRef = useRef();
  const manRef = useRef();
  const keyRef = useRef();
  const priceRef = useRef();
  const expRef = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("", {});
  }
  return (
    <>
      <Navbar />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Create Shipment</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Medicine ID</Form.Label>
              <Form.Control
                type="text"
                ref={prodNumRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="name">
              <Form.Label>Medicine Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Manufacture Date</Form.Label>
              <Form.Control type="text" ref={manRef}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" ref={expRef} required></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>MRP</Form.Label>
              <Form.Control type="text" ref={priceRef} required></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Private Key</Form.Label>
              <Form.Control type="text" ref={keyRef} required></Form.Control>
            </Form.Group>
            <Button
              className="w-100"
              type="submit"
              style={{
                width: "15rem",
                maxWidth: "15rem",
                backgroundColor: "blueviolet",
                color: "white",
              }}
              onClick={handleSubmit}
            >
              Create Shipment
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
