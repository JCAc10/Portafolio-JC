import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Nav, Image, Container, Navbar } from "react-bootstrap";

const NavbarHeader = () => {

  const navigate = useNavigate();

 

  return (
    <>
      <Navbar expand="lg" variant="dark" className="sticky-top custom-navbar">
        <Container>
          <Navbar.Brand>
            <Image
              src="https://avatars.githubusercontent.com/u/133301187?v=4"
              roundedCircle
              width={50}
              height={50}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto custom-nav">
              <Nav.Link as={Link} to="/" onClick={() => navigate("")}>
                <ContentList icon="fa-solid fa-play" detail="INICIO" />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/AboutMe"
                onClick={() => navigate("/AboutMe")}
              >
                <ContentList icon="fa-solid fa-user" detail="SOBRE MÍ" />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Skills"
                onClick={() => navigate("/Skills")}
              >
                <ContentList icon="fa-solid fa-code" detail="SKILLS" />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Certification"
                onClick={() => navigate("/Certification")}
              >
                <ContentList
                  icon="fa-solid fa-graduation-cap"
                  detail="RESUMEN"
                />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Projects"
                onClick={() => navigate("/Projects")}
              >
                <ContentList icon="fa-solid fa-laptop-code" detail="PROYECTOS" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

const ContentList = ({ icon, detail }) => {
  return (
    <>
      <i className={icon}></i> {detail}
    </>
  );
};

export default NavbarHeader;
