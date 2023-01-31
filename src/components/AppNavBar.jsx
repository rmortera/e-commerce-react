import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AppNavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  return (
    <Navbar className="navbar" bg="black" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/purchases">
              Purchases
            </Nav.Link>
            <Nav.Link>Purchases (sidebar)</Nav.Link>
            <Nav.Link onClick={logout}>Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
