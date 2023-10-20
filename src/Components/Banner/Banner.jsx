import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../Assets/car11.jpg";
import image2 from "../../Assets/car12.webp";
import image3 from "../../Assets/car13.jpg";

const carouselStyle = {
  marginTop: "150px", // Add margin at the top of the Carousel
};

const imageStyle = {
  width: "300px",
  height: "500px",
};

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col lg={8}>
          <Carousel style={carouselStyle}>
            {" "}
            {/* Apply the carousel style */}
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                style={imageStyle}
              />
              <Carousel.Caption>
                <h3>hyderabad briyani</h3>
                <p className="d-none d-sm-block">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                style={imageStyle}
              />

              <Carousel.Caption>
                <h3>Chennai briyani</h3>
                <p className="d-none d-sm-block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                style={imageStyle}
              />

              <Carousel.Caption>
                <h3>pakistan briyani</h3>
                <p className="d-none d-sm-block">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">briyani lovers assemble!</h2>
        <p className="lead text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </Container>
  );
};

export default Banner;
