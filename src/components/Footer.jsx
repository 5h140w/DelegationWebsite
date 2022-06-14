import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: #e3ecf1ba;
  color: black;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  @media only screen and (max-width: 480px) {
    padding: 10px;
    flex-direction: column;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  @media only screen and (max-width: 480px) {
    margin-bottom : 20px;
  }
`;

const ListItem = styled.li`
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }

`;
const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Lena Instruments Ⓒ</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
