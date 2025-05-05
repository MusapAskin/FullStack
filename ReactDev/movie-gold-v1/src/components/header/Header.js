import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Button, Container } from "@mui/material";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "gold" }}>
          <FontAwesomeIcon icon={faVideoSlash} /> Movie Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ marginLeft: "auto" }}>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/movies" className="nav-link">
              Movies
            </NavLink>
            <NavLink to="/tv-shows" className="nav-link">
              TV Shows
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav>
          <Button variant="outline-light" style={{ marginRight: "20px" }}>
            Login
          </Button>
          <Button variant="outline-light">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
