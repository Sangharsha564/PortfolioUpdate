import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const FooterSection = styled.footer`
  background: #156064;
  position: relative;
  color: #F7DC4f;
  font-family: 'Poppins', sans-serif;
`;

const FooterCTA = styled.div`
  border-bottom: 1px solid #F7DC4F;
  padding: 50px 0;
`;

const SingleCTA = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  i {
    color: #F7DC4f;
    font-size: 30px;
    margin-right: 15px;
  }

  h4 {
    color: white;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  span {
    color: ff5e14;
    font-size: 15px;
  }
`;

const FooterContent = styled.div`
  padding: 50px 0;
`;

const FooterLogo = styled.div`
  margin-bottom: 30px;

  img {
    max-width: 200px;
  }
`;

const FooterText = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  color: white;
  line-height: 28px;
`;

const FooterWidgetHeading = styled.h3`
  color: #F7DC4F;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15px;
    height: 2px;
    width: 50px;
    background: #ff5e14;
  }
`;

const FooterWidget = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      margin-bottom: 12px;
      margin-right: 20px;

      a {
        color: white;
        text-transform: capitalize;
        text-decoration: none;

        &:hover {
          color: #ff5e14;
        }
      }
    }
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const AnimatedImage = styled.div`
margin-left: 30%;
  animation: ${bounce} 1s infinite;
  
  img {
    max-width: 100%;
    display: block;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <FooterCTA>
          <div className="row">
            <div className="col-xl-4 col-md-4">
              <SingleCTA>
                <FontAwesomeIcon style={{fontSize:'40px',marginRight:'10px', color:'#F7DC4F'}} icon={faMapMarkerAlt} />
                <div className="cta-text">
                  <h4>Location</h4>
                  <span>Kathmandu, Nepal</span>
                </div>
              </SingleCTA>
            </div>
            <div className="col-xl-4 col-md-4">
              <SingleCTA>
                <FontAwesomeIcon style={{fontSize:'40px',marginRight:'10px', color:'#F7DC4F'}} icon={faPhone} />
                <div className="cta-text">
                  <h4>Phone Number</h4>
                  <span>+977 9861526363</span>
                </div>
              </SingleCTA>
            </div>
            <div className="col-xl-4 col-md-4">
              <SingleCTA>
                <FontAwesomeIcon style={{fontSize:'40px',marginRight:'10px', color:'#F7DC4F'}} icon={faEnvelopeOpen} />
                <div className="cta-text">
                  <h4>Mail</h4>
                  <span>sangharsha70@gmail.com</span>
                </div>
              </SingleCTA>
            </div>
          </div>
        </FooterCTA>
        <FooterContent>
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <FooterWidget>
                <FooterLogo>
                  <a href="/"><img src="./Photos/sign.png" alt="logo" /></a>
                </FooterLogo>
                <FooterText>Cybersecurity is not just about protecting data; it’s about safeguarding trust.</FooterText>
              </FooterWidget>
            </div>
            <div className="col-xl-4 col-lg-4">
              <FooterWidget>
                <FooterWidgetHeading>Useful Links</FooterWidgetHeading>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#aboutme">About</a></li>
                  <li><a href="#service">Services</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </FooterWidget>
            </div>
            <div className="col-xl-4 col-lg-4">
              <FooterWidget>
                <AnimatedImage>
                  <img src="./Photos/footer.png" alt="Animated" />
                </AnimatedImage>
              </FooterWidget>
            </div>
          </div>
        </FooterContent>
      </div>
    </FooterSection>
  );
};

export default Footer;
