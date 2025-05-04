import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EditIcon from "@material-ui/icons/Edit";  // Import the Edit icon
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Savni Maheshwari</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="mailto:maheshwarisavni@gmail.com">
                <EmailRoundedIcon style={{ fontSize: 20 }} />
              </Nav.Link>
              <Nav.Link href="https://github.com/savnimaheshwari" target="_blank">
                <GitHubIcon style={{ fontSize: 19 }} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/savni-maheshwari-0b8849283" target="_blank">
                <LinkedInIcon style={{ fontSize: 21 }} />
              </Nav.Link>
              <Nav.Link href="https://pin.it/1hzJz7UCh">
                <EditIcon style={{ fontSize: 20 }} />  {/* Edit Icon */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
