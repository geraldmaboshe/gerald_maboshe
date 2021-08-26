import React from "react";
import { Row, Col } from "reactstrap";
import "./index.scss";

function Project() {
    return (
        <div className="projects-container">
            <p id="projects">Projects</p>
            <Row>
                <Col sm="12" md="6">
                    <p className="project-title">Layer5</p>
                    <p className="project-description">
                        Layer5 is the service mesh company. Creator
                        and maintainer of service mesh standards.
                        Maker of Meshery, the service mesh management
                        plane.
                        <br />
                        My contribution to this project was building
                        the Service Mesh Landascape which is the
                        comparison of service mesh strengths.
                    </p>
                    <a href="https://github.com/layer5io/layer5">
                        View Project
                    </a>
                </Col>
                <Col sm="12" md="6">
                    <p className="project-title">
                        Flight Booking App
                    </p>
                    <p className="project-description">
                        Flight Booking App was built to ease the
                        process of booking a plane. It was my first
                        time using GraphQL, koa.js, knex.js and
                        PostgreSQL on one project. It was fun to
                        build.
                    </p>
                    <a href="https://github.com/geraldmaboshe/flight_booking">
                        View Project
                    </a>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col sm="12" md="6">
                    <p className="project-title">Tilungisa Auto</p>
                    <p className="project-description">
                        Tilungisa Auto mobile app was built to ease
                        the challenges that motorists face when in
                        need of automechanical services. Integrating
                        socket.io in the application to enable real
                        time communication between the motorist and
                        the automechanical service provider was
                        awesome.
                    </p>
                    <a href="https://github.com/geraldmaboshe/TilungisaAuto/blob/master/README.md">
                        View Project
                    </a>
                </Col>
                <Col sm="12" md="6">
                    <p className="project-title">Zibo</p>
                    <p className="project-description">
                        Zibo was built to provide a simple way to find
                        an apartment to buy or rent. An interesting
                        part of this project was handling
                        multipart/form-data using multer library.
                    </p>
                    <a href="https://github.com/geraldmaboshe/zibo">
                        View Project
                    </a>
                </Col>
            </Row>
        </div>
    );
}

export default Project;
