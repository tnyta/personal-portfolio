import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

function Portfolio() {
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState({ title: "", description: "", docUrl: "" });

    const handleShow = (item) => {
        setModalContent(item);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const labsData = [
        { title: "Introduction to Mobile Development", description: "Exploration of mobile computing history and future trends.", docUrl: "https://raw.githubusercontent.com/tnyta/personal-portfolio/main/lab001.pdf", id: "lab1" },
        { title: "XML and Related Technologies", description: "Overview of XML, DTD, and validation processes.", docUrl: "https://example.com/lab2", id: "https://raw.githubusercontent.com/tnyta/personal-portfolio/main/lab002.pdf" },
        { title: "QUIZ APP: Code Crackers Challenge", description: "Development of a quiz app that enhances learning.", docUrl: "https://example.com/lab3", id: "https://raw.githubusercontent.com/tnyta/personal-portfolio/main/lab003.pdf" },
        { title: "Understanding Dart: Collections", description: "Detailed analysis of Dart collections.", docUrl: "https://example.com/lab4", id: "https://raw.githubusercontent.com/tnyta/personal-portfolio/main/lab004.pdf" },
        { title: "Changing Widgets in Response to User Input", description: "Exploring dynamic UI updates in Flutter.", docUrl: "https://example.com/lab5", id: "https://raw.githubusercontent.com/tnyta/personal-portfolio/main/lab005.pdf" }
    ];

    const classworkData = [
        { title: "Android Studio: App Development", description: "Developing an Android application.", docUrl: "https://raw.githubusercontent.com/tnyta/personal-portfolio/main/cw001.pdf", id: "cw1" },
        { title: "Shopping List App", description: "Creation of a shopping list app.", docUrl: "https://example.com/cw2", id: "https://raw.githubusercontent.com/tnyta/personal-portfolio/main/cw002.pdf" },
        { title: "Flutter: App Development", description: "Developing cross-platform applications using Flutter.", docUrl: "https://example.com/cw3", id: "https://raw.githubusercontent.com/tnyta/personal-portfolio/main/cw003.pdf" }
    ];

    const projectsData = [
        { title: "Mental Wellness Companion App", description: "A comprehensive app designed to support mental wellness.", docUrl: "https://raw.githubusercontent.com/tnyta/personal-portfolio/main/project01.pdf", id: "project1" }
    ];

    const renderCard = (item, category) => (
        <Col md={category === 'project' ? 6 : 4} className="mb-4" key={item.id}>
            <Card>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary" onClick={() => handleShow(item)}>View More</Button>
                </Card.Body>
            </Card>
        </Col>
    );

    return (
        <Container className="mt-5">
            <h2>Portfolio</h2>
            <h3 className="mt-4">Labs</h3>
            <Row>{labsData.map(item => renderCard(item, 'lab'))}</Row>
            <h3 className="mt-4">Classwork</h3>
            <Row>{classworkData.map(item => renderCard(item, 'classwork'))}</Row>
            <h3 className="mt-4">Major Projects</h3>
            <Row>{projectsData.map(item => renderCard(item, 'project'))}</Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalContent.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalContent.description}
                    <div className="mt-3">
                        <Button variant="secondary" href={modalContent.docUrl} target="_blank">
                            Open Document
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Portfolio;
