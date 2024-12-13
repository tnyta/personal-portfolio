// src/pages/Portfolio.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Portfolio() {
  // Example portfolio data
  const labsData = [
    {
      title: "Lab 1: Intro to HTML",
      description: "Basic HTML structure, tags, and semantics",
    },
    {
      title: "Lab 2: CSS Basics",
      description: "Learning CSS selectors, box model, and layout",
    },
    // ... add more labs
  ];

  const classworkData = [
    {
      title: "Class Exercise 1",
      description: "JavaScript array manipulations",
    },
    // ... more
  ];

  const projectsData = [
    {
      title: "Final Project: E-commerce Site",
      description:
        "Built a React-based e-commerce platform with cart, user auth, and real-time database.",
    },
  ];

  const renderCard = (item) => (
    <Col md={4} className="mb-4" key={item.title}>
      <Card>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <Container className="mt-5">
      <h2>Portfolio</h2>

      {/* Labs Section */}
      <h3 className="mt-4">Labs</h3>
      <Row>{labsData.map(renderCard)}</Row>

      {/* Classwork Section */}
      <h3 className="mt-4">Classwork</h3>
      <Row>{classworkData.map(renderCard)}</Row>

      {/* Projects Section */}
      <h3 className="mt-4">Projects</h3>
      <Row>{projectsData.map(renderCard)}</Row>
    </Container>
  );
}

export default Portfolio;
