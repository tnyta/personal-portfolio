import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Footer() {
    return (
        <Card className="text-center" bg="dark" text="white" style={{ marginTop: 'auto' }}>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <h5>My Portfolio</h5>
                            <p>Connect with me on social media or email me directly!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" href="https://github.com/tnyta/personal-portfolio" target="_blank" rel="noreferrer">
                                GitHub
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="primary" href="https://www.linkedin.com/in/talentnyota/" target="_blank" rel="noreferrer">
                                LinkedIn
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="primary" href="mailto:youremail@example.com">
                                Email
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            <Card.Footer className="text-muted">
                © {new Date().getFullYear()} Talent Nyota - All Rights Reserved
            </Card.Footer>
        </Card>
    );
}

export default Footer;
