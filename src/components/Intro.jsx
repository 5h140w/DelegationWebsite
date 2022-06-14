import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import AnimatedShapes from "./AnimatedShapes";
import axios from "axios"
import { useState } from "react";

const Container = styled.div`
  margin-top: 110px;
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  margin-right:20px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;
const Wapper=styled.div`
  width: 50%;
  padding: 10PX;
  border : 1px solid #48514b ;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
`;
const Content = styled.div`
  text-align: center;
 margin-bottom: 10px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;
const SubTitle = styled.span`
color:#827162;
font-size:25px;
font-weight: bold;
letter-spacing: 2px;

`;
const Values = styled.span`
color:#4e5551;
font-size:20px;
padding: 7px;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column; 
  @media only screen and (max-width: 768px) {
    margin-top:50px;
    width: 100%;
    height: 100%;
  }
`;





const Intro = () => {
const [data,setData]=useState({});
    useEffect(()=>{
        const getInfo=async()=>{
            let    res=await axios.get("https://flaremetrics.io/api/ftso/provider/metrics?network=songbird&address=0xc9ac8f034d295962a6a975b717b691437605bbb6")
             setData(res.data)        
        }
        getInfo();
        },[])
  return (
    <Container>
      <Left>
        <Title>Lena Instruments</Title>
        <Desc>
          We provide accurate and reliable price feeds to the Flare Network and
          a transparent, incentivised, risk-free delegation service. We do so by
          leveraging the distributed nature of the network and its participants.
          Lena Instruments are an active member of the Flare Network ecosystem.
        </Desc>
        <Info>
          <Button>Delegate Your Votes</Button>
          <Contact>
            <Phone>Call Us (012) 345 - 6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
          <Wapper>
        <Content><SubTitle>Vote Power</SubTitle><Values>{  Number.parseFloat(data.live_vote_power_percentage).toFixed(2)+" "}%</Values><Values>{Number.parseFloat(data.live_vote_power).toFixed(0)+" "}SGB</Values></Content>
        <Content><SubTitle>Reward Rate</SubTitle><Values>Avg. {data.live_reward_rate}</Values><Values>{data.average_reward_rate}</Values></Content>
        <Content><SubTitle>Availability</SubTitle><Values>{data.availability} </Values><Values>Past 6 hours</Values></Content>
        </Wapper>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
