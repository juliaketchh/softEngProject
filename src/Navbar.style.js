import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  background: linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%);

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  /* background-color: red; */
`;

export const MiddleContainer = styled.div`
  flex: 60%; 
  display: flex;
  align-items: center; 
  justify-content: center;
  padding: 20px;
  /* background-color: blue; */
`;

export const RightContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  /* background-color: salmon; */
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  /* background-color: yellow; */
`;

export const NavbarLinkContainer = styled.div`
  /* Align links */
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 20px;
  max-width: 130px;
  height: auto;
`;

export const Button = styled.button`
  background-color: #748BC9; /* Green background */
  border: solid;
  border-color: #A6AFC6;
  color: white;
  padding: 0px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #905D99; /* Darker shade for hover effect */
  }

  &:focus {
    outline: none; /* Removes the outline on focus */
  }
`;
