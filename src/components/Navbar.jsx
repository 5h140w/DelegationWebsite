import React from "react";
import { useState } from "react";
import styled from "styled-components";
import '../styles/style.css'

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color:${(props) => props.scroll? "#e3ecf1ba":""};
  transition: 1s all;
  @media only screen and (max-width: 992px) {
    background-color:#e3ecf1ba;
  }
`;
const Wrapper = styled.div`
  position:relative;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width:100%;
  @media only screen and (max-width: 992px) {
    display:block;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 992px) {
    display:block;
    padding:0;
    margin:0;
  }
`;

const MenuItem = styled.li`
  margin: 0 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  @media only screen and (max-width: 992px) {
    margin: 20px 0px;
    text-align:center;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: darkblue;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
   @media only screen and (max-width: 992px) {
    margin: 0 auto;
    display:block;
  }
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border:none;
  font-size:20px;
  display:none;
  @media only screen and (max-width: 992px) {
    display:block;
    padding:20px

  }
`
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen , setIsOpen] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleClick = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <Container scroll={isScrolled}>
        <Wrapper>
            <Left>
              <Logo>Lena Instruments</Logo>
              <ToggleButton onClick={handleClick}>
                <i className="fas fa-bars"></i>              
              </ToggleButton>
            </Left>
              <Menu className={isOpen ? "" : "none"}>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Contact</MenuItem>
                  <MenuItem>Delegate</MenuItem>
              </Menu>
              <Button className={isOpen ? "" : "none"} >JOIN NOW</Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar
