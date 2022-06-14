import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";
import emailjs from "emailjs-com";
import {useRef, useState } from "react";
const Container = styled.div`
    height: 90%;
    background: url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png");
;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media only screen and (max-width: 992px) {
    margin: 20px;
    text-align:center;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 992px){
    margin-bottom:20px;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 992px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {

const formRef = useRef();
const [done, setDone] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_gsx5luf",
      "template_dl2h8xc",
      formRef.current,
      "BcF3tMKVgfY3DYmSy"
    )
    .then(
      (result) => {
        console.log(result.text);
        setDone(true)
      },
      (error) => {
        console.log(error.text);
      }
    );
};

  return (
    <Container>
      <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
      <Wrapper>
        <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
            <LeftForm>
              <Input placeholder="Your Name" name="name"/>
              <Input placeholder="Your Email"  name="email" />
              <Input placeholder="Subject" name="subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" name="message"/>
              <Button >Send</Button>
              {done && "Thank you..."}

            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., Suise, Suisse</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+1 000 0000 0000</Text>
            <Text>+1 000 0000 0000</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@lena.tech</Text>
            <Text>sales@lena.tech</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
