// src/pages/Contact.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields.");
      return;
    }
    alert(`Thanks for reaching out, ${formData.name}!`);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2>Contact Me</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                as="textarea"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <h4>Alternatively, find me on:</h4>
          <ul>
            <li>
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:youremail@example.com">Email</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
