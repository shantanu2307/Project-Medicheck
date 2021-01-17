import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import Navbar from "./Navbar";
import QrCode from "./QRCODE";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import randomLocation from "random-location";
export default function Dashboard() {
  function getLocation() {
    const P = {
      latitude: 37.7768006,
      longitude: -122.4187928,
    };
    const R = 500;
    const randomPoint = randomLocation.randomCirclePoint(P, R);
    return (
      "Latitude : " +
      randomPoint.latitude +
      " Longitude: " +
      randomPoint.longitude
    );
  }

  const { currentUser } = useAuth();
  const idRef = useRef();
  const [keyRef, setkeyRef] = useState();
  const [loading, setLoading] = useState(true);
  const privateKeyRef = useRef();
  const [sent, setSent] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(getLocation());
    const user = await axios.get("/backend/userprofile", {
      uid: currentUser.uid,
    });
    const response = await axios.post("/backend/retailer", {
      product_id: idRef.current.value,
      name: user.name,
      address: user.address,
      date: String(Date.now()),
      location: getLocation(),
      private_key: privateKeyRef,
    });
    setSent(true);
  }
  function getData(data) {
    setkeyRef(data);
    setLoading(false);
  }
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
          {sent && <Alert variant="success">{"Your data has been sent"}</Alert>}
          <Form.Group>
            <Form.Label className="text-center">Product ID :</Form.Label>
            <Form.Control
              className="w-100"
              type="text"
              value={keyRef}
              ref={idRef}
            />
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
    </>
  );
}
