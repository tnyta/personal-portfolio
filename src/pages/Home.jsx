// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Welcome to My Portfolio</h1>
          <p>
            <strong>Name:</strong> John Doe
            <br />
            <strong>Area of Study:</strong> Computer Science
            <br />
            <strong>Course:</strong> INFT3101
          </p>
          <p>
            This website highlights my labs, classwork, and projects. Feel free
            to explore!
          </p>
          <Button variant="primary" as={Link} to="/portfolio">
            View My Portfolio
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
