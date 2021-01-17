import React, { useState } from "react";
import Navbar from "./NB";
import { Card, Form, Button } from "react-bootstrap";
export default function Shipment() {
  const [prodNumRef, setProdNumRef] = useState();
  const [nameRef, setNameRef] = useState();
  const [companyRef, setCompanyRef] = useState();
  const [manRef, setManRef] = useState();
  const [priceRef, setPriceRef] = useState();
  const [expRef, setExpRef] = useState();
  function handleSubmit(e) {}

  return (
    <>
      <Navbar />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Create Shipment</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Product ID</Form.Label>
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
            <Form.Group id="Company">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" ref={companyRef}></Form.Control>
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
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
