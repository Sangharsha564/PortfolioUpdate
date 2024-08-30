import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Resume from './Resume';

const AboutCon = styled(Container)`
  background-color: #F1F0F0;
  padding: 50px 0;
  background-image: url('./Photos/aboutbg.jpg'); /* Add your background image path here */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
`;

const AboutSection = styled(Row)`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const AboutImage = styled.img`
  width: 80%;
  height: auto;
  margin-bottom: 20px;
  
`;

const AboutContent = styled.div`
  padding: 0 30px;
  
`;

const About = styled.h1`
  font-weight: bold;
  color: #015761;
  padding-top: 80px;
`;

const AboutPara = styled.p`
  padding: 20px 0;
  margin-right: 50px;
`;

const AboutButton = styled(Button)`
  background-color: #F7DC4F;
  border: none;
  border-radius: 0px;
  color: #015761;
  font-size: 16px;
  &:hover {
    background-color: #015761;
    color: #F7DC4F;
  }
`;

const Aboutme = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AboutCon fluid id="aboutme">
        <AboutSection>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <AboutImage src="./Photos/leftaboutpic.png" alt="About Me Image" />
          </Col>
          <Col md={6}>
            <AboutContent>
              <About>About Me</About>
              <AboutPara>
                I am passionate about pursuing a career in cybersecurity, dedicated to enhancing the safety and integrity of digital systems. My objective is to become an expert in identifying and addressing security challenges, driven by a commitment to innovation and protection. I am eager to contribute my skills and enthusiasm to creating secure digital environments. Let’s connect to advance cybersecurity together!
              </AboutPara>
              <AboutPara>
                As the cybersecurity landscape evolves, so does my commitment to staying ahead of emerging threats and technologies. I actively engage in ongoing education and hands-on training to deepen my knowledge and refine my skills. This relentless pursuit of excellence ensures that I am well-equipped to tackle the most complex security challenges. I am always exploring new opportunities to expand my expertise and collaborate with like-minded professionals who share a passion for safeguarding our digital world.
              </AboutPara>
              <AboutButton onClick={handleShow}>View Full Resume</AboutButton>
              <Offcanvas show={show} onHide={handleClose} style={{ width: '100vw', backgroundColor: '#015761' }}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <Resume />
                </Offcanvas.Body>
              </Offcanvas>
            </AboutContent>
          </Col>
        </AboutSection>
      </AboutCon>
    </>
  );
};

export default Aboutme;
