import React, { useRef } from "react";
import styled from "styled-components";

const ContactSection = styled.div`
  font-family: 'Nunito', sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  background-color: #004D65;
`;

const Container = styled.div`
  display: flex;
  max-width: 1320px;
  width: 100%;
  padding: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  order: 2; /* Set order to 2 on small screens */
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }

  @media (max-width: 1024px) {
    padding-right: 0;
    margin-bottom: 20px;
    order: 2;
  }
`;

const FormContainer = styled.div`
  flex: 1.5;
  background-color: #015761;
  padding: 30px 50px;
  color: white;
  order: 1; /* Set order to 1 on small screens */

  @media (max-width: 1024px) {
    padding: 20px;
    order: 1;
  }
`;

const Heading = styled.p`
  font-size: 35px;
  line-height: 48px;
  font-weight: 800;
  margin-bottom: 30px;
`;

const InputArea = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const InputLabel = styled.p`
  margin-bottom: 10px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  color: #015761;
  max-width: 200px;
  text-align: center;
  display: block;
  padding: 20px;
  background-color: #F7DC4F;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("Success!");
        // Clear the input fields
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      })
      .catch((error) => alert(error));
  };

  return (
    <ContactSection id="contact">
      <Container>
        <FormContainer>
          <Heading>Contact Me</Heading>
          <form 
            style={{ display: 'flex', flexDirection: 'column' }}
            name="contact" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit}
          >
            {/* Hidden Netlify form field to prevent bot submissions */}
            <input type="hidden" name="form-name" value="contact" />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <InputArea style={{ width: "48%" }}>
                <InputLabel>Full Name</InputLabel>
                <InputField 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  ref={nameRef} 
                />
              </InputArea>
              <InputArea style={{ width: "48%" }}>
                <InputLabel>Email Address</InputLabel>
                <InputField 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  ref={emailRef} 
                />
              </InputArea>
            </div>
            <InputArea>
              <InputLabel>Message</InputLabel>
              <TextArea
                name="message"
                id="message"
                rows="10"
                required
                ref={messageRef}
              />
            </InputArea>
            {/* Netlify reCAPTCHA */}
            <div data-netlify-recaptcha="true"></div>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </form>
        </FormContainer>
        <ImgContainer>
          <img
            src="./Photos/contactimg.png"
            alt="Contact Illustration"
          />
        </ImgContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
