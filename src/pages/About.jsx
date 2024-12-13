// src/pages/About.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>About Me</h2>
          <p>
            Hello! I’m John Doe, a passionate web developer specialized in React
            and Node.js. I enjoy coding, solving problems, and creating beautiful
            user interfaces.
          </p>
          <p>
            In my spare time, I explore emerging technologies, play guitar, and
            practice design principles. This portfolio shows my journey in
            INFT3101, including labs, classwork, and major projects.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
