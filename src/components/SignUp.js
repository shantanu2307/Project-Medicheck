import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import StaticNavBar from "./StaticNavBar";
export default function SignUp() {
  const emailRef = useRef();
  const companyRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();
  const nameRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      const x = await signup(emailRef.current.value, passwordRef.current.value);
      console.log("UID", x.user.uid);
      history.push("/dashboard");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <StaticNavBar />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="company">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" ref={companyRef}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" ref={roleRef}></Form.Control>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button
              disabled={loading}
              style={{
                width: "15rem",
                maxWidth: "15rem",
                backgroundColor: "blueviolet",
                color: "white",
              }}
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          <div className="w-100 text-center mt-2 text-danger">
            Already have an account ? <Link to="/login">Log In</Link>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
