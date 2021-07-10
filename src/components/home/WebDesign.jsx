import React from "react";
import Zoom from 'react-reveal/Zoom';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BrowserRouter, Link } from 'react-router-dom';

import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const WebDesign = ({ heading, weblink, weblink2, imgWidth, imgHeight }) => {
    //const redirectToYutaroPage = () => {
    //    window.location.href = "nakayamayutaro.sakura.ne.jp";
    //};

    return (
    <Jumbotron fluid id="projects" className="bg-gray m-0">
    <Container>
                <h2 className="display-4 mb-5 text-center">{heading}</h2>
                <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <Zoom>
                        <Card className="card shadow-lg bg-white rounded text-center">
                            <Card.Body>
                                <img
                                    className="border"
                                    src={weblink}                               
                                    width={imgWidth}
                                    height={imgHeight}    
                                />
                                <img
                                    className="border"
                                    src={weblink2}                              
                                    width={imgWidth}
                                    height={imgHeight}    
                                />
                            </Card.Body>
                        </Card>
                    </Zoom>
                </Col>
                <Col md={1}></Col>
                </Row>
        </Container>
    </Jumbotron>
    );
}

export default WebDesign; 