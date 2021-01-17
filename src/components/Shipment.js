import React, { useRef, useState } from "react";
import Navbar from "./NB";
import axios from "axios";
import { Card, Form, Button, Alert } from "react-bootstrap";
export default function Shipment() {
  const nameRef = useRef();
  const manRef = useRef();
  const keyRef = useRef();
  const priceRef = useRef();
  const expRef = useRef();
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("/backend/medcreate", {
      name: nameRef.current.value,
      mrp: priceRef.current.value,
      date: manRef.current.value,
      expiry: expRef.current.value,
      private_key: keyRef.current.value,
    });
    setLoading(true);
  }
  return (
    <>
      <Navbar />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Create Shipment</h2>
          <Form>
            {loading && (
              <Alert variant="success">Your Submission has been recorded</Alert>
            )}
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
              <Form.Control
                type="password"
                ref={keyRef}
                required
              ></Form.Control>
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
