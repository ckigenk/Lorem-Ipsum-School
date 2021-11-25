import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default class NavbarComp extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to={"/"}>
              <img
                src={logo}
                alt="logo"
                className="navbar-brand"
                width="50"
                height="50"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll>
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/AboutUs"}>
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to={"/Academics"}>
                  Academics
                </Nav.Link>
                <Nav.Link as={Link} to={"/Admissions"}>
                  Admissions
                </Nav.Link>
                <Nav.Link as={Link} to={"/Gallery"}>
                  Gallery
                </Nav.Link>
                <Nav.Link as={Link} to={"/ContactUs"}>
                  Contact Us
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
