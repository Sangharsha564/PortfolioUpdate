import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

const Navbars = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#015761" }}>
        <Navbar.Brand className='fs-1' style={{ color: "#F7DC4F" }} href="/">
          <img src="/Photos/sign.png" alt="" />
        </Navbar.Brand>
        <Container className='flex'>
          <Stack gap={1}>
            <Navbar.Toggle 
              aria-controls="basic-navbar-nav" 
              style={{
                maxWidth:"60px",
                padding: "5px 10px", // Reduce padding to make it smaller
                fontSize: "14px", // Decrease font size if necessary
              }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto fs-5">
                <Nav.Link style={{ color: "#ffffff" }} href="/">Home</Nav.Link>
                <Nav.Link style={{ color: "#ffffff" }} href="#aboutme">About</Nav.Link> 
                <Nav.Link style={{ color: "#ffffff" }} href="#service">Service</Nav.Link>
                <Nav.Link style={{ color: "#ffffff" }} href="#skills">Skills</Nav.Link>
                <Nav.Link style={{ color: "#ffffff" }} href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Stack>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
