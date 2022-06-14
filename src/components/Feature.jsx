import React from "react";
import styled from "styled-components";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  position:relative;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width:70%;
height: 100%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    text-align:center;
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width:300px;
    margin:20px auto;
  }
  @media only screen and (max-width:480px){
    width:100%;
  }
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src="https://media.istockphoto.com/photos/hills-during-sunrise-picture-id524376056?k=20&m=524376056&s=612x612&w=0&h=pVw3gAQ-WrcbgWTsbjsEpf60kUyZTikx81aGuCTuuM8=" />
      </Left>
      <Right>
        <Title>
        A Few Words About The <b>Founders</b> 
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Feature;
