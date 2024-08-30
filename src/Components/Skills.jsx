import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the first slider (right to left)
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 12)); }
`;

// Keyframes for the second slider (left to right)
const scrollReverse = keyframes`
  0% { transform: translateX(calc(-250px * 12)); }
  100% { transform: translateX(0); }
`;

// Styled components
const Slider = styled.div`
  background-image: url('./Photos/gray4.jpg'); /* Add your background image path here */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  margin: auto;
  padding-top: 10px;
  overflow: hidden;
  position: relative;
  width: 100%;

  ::before,
  ::after {
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  }

  ::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  ::before {
    left: 0;
    top: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const SlideTrack = styled.div`
  display: flex;
  width: calc(250px * 24); /* Adjust based on number of slides */
  animation: ${props => props.reverse ? scrollReverse : scroll} 40s linear infinite;

  @media (max-width: 768px) {
    width: calc(200px * 24); /* Adjust width for smaller screens */
  }
`;

const Slide = styled.div`
  height: 150px;
  width: 250px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;

  @media (max-width: 768px) {
    height: 200px;
    width: 150px;
  }
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  border-radius:10px;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const SkillContainer = styled.section`
  width: 100%;
  padding: 50px 20px;
  background-image: url('./Photos/gray4.jpg'); /* Add your background image path here */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  color: #F7DC4F;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  h1 {
    font-size: 2.5rem;
    color: #015761;
    margin-bottom: 20px;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;

    ::after {
      content: '';
      display: block;
      width: 80px;
      height: 2px;
      background: #ff5e14;
      margin: 20px auto 0;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #015761;
    
    margin: auto;
  }

  @media (max-width: 768px) {
    padding: 30px 15px;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Skills = () => {
  const imageUrls1 = [
    './Photos/nmap.webp',
    './Photos/burp.webp',
    './Photos/wireshark.png',
    './Photos/nessus.jpg',
    './Photos/nikto.webp',
    './Photos/kali.jpg',
    './Photos/hashcat.png',
    './Photos/sqlmap.jpg',
    './Photos/john.jpg',
    './Photos/window.jpg',
    './Photos/openvas.png',
    './Photos/phishing.webp',
  ];

  const imageUrls2 = [
    './Photos/hping.jpg', // Replace with your actual image paths
  
    './Photos/maltego.png',
    './Photos/metasploit.jpg',
  
    './Photos/htdra.png',
    './Photos/owasp.webp',
    './Photos/netcat.jpg',
    './Photos/tor.png',
    './Photos/javascript.png',
    './Photos/ettercap.jpg',
    './Photos/shodan.jpg',
    './Photos/python.jpg',
    './Photos/crypto.png',
  ];

  return (
    <>
      <SkillContainer fluid id='skills'>
        <h1>Skills</h1>
        <p style={{ margin: '0px' }}>In my cybersecurity journey, I’ve mastered various essential tools that fortify digital defenses. These tools are pivotal in conducting thorough vulnerability assessments, network security audits, and ethical hacking practices, ensuring robust protection against cyber threats.</p>
      </SkillContainer>
      
      <Slider>
        <SlideTrack>
          {imageUrls1.concat(imageUrls1).map((url, index) => (
            <Slide key={index}>
              <Image src={url} alt={`Slide ${index + 1}`} />
            </Slide>
          ))}
        </SlideTrack>
      </Slider>

      <Slider>
        <SlideTrack reverse>
          {imageUrls2.concat(imageUrls2).map((url, index) => (
            <Slide key={index}>
              <Image src={url} alt={`Slide ${index + 1}`} />
            </Slide>
          ))}
        </SlideTrack>
      </Slider>
    </>
  );
};

export default Skills;
