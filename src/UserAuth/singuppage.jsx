import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router";
import axios from "axios";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Error state for better debugging

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/create",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensures cookies & CORS are handled properly
        }
      );
      console.log("Success:", response.data);
    } catch (err) {
      console.error("Error:", err);
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "350px", padding: "20px" }}>
        <h3 className="text-center">Sign Up</h3>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-2">
            Sign Up
          </Button>
        </Form>
        <p className="text-center mt-2">
          Already have an account?{" "}
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            Log In
          </Link>
        </p>
      </Card>
    </Container>
  );
};

export default SignupPage;
