import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header1.css";
import { Link } from "react-router-dom";

function Header1() {
  return (
    <div className="header1">
      <Container>
        <Row>
          <Col lg='9' md='8' sm='6'>
            <div className="header1__logo">
              <img src="./Images/devicecureLogo.jpg" alt="" />
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <div className="header1__links">
              <span className="link__1">Location</span>
              <Link className="anchor" to="/login">
                <span className="link__2">Login</span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header1;
